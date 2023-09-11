import { faCheck, faEllipsis, faFileImport, faPencil, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, MouseEvent, Dispatch, SetStateAction, useRef } from "react";
import { ContextMenu } from "../../../menus/context-menu";
import { Gallery } from "src/models/gallery";
import { ContextMenuListItem } from "src/components/menus/context-menu-li";
import { DeleteButton } from "./delete-button";
import { GalleryStudioModal } from "../modals/gallery-studio-modal";
import { deleteGallery } from "src/services/galleries.service";
import { getGalleriesByFolderID } from "src/services/galleries.service";
import { MoveGalleryToFolderModal } from "../modals/move-gallery-to-folder-modal";

// mouse coordinates
interface Points {
	x: number;
	y: number;
};

interface Props {
	gallery: Gallery;
	galleries: Array<Gallery | null>;
	setGalleries: Dispatch<SetStateAction<Array<Gallery | null>>>;
};

export const GalleryContextMenuButton: React.FC<Props> = ({
	gallery,
	galleries,
	setGalleries
}) => {
	// ref for click outside
	const ref = useRef<HTMLDivElement>(null);

	// menu display state
	const [isContextMenu, setIsContextMenu] = useState<boolean>(false);
	const [points, setPoints] = useState<Points>({
		x: 0,
		y: 0
	});
	const flipContextMenu = (currentState: boolean) => setIsContextMenu(!currentState);
	
	// event handler for context menu button
	const onContextClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		flipContextMenu(isContextMenu);
		console.log("Button click. Context Menu: ", isContextMenu);
		setPoints({
			x: e.pageX,
			y: e.pageY
		});
	};

	const onCopyClick = (e: MouseEvent<HTMLButtonElement>) => {
		const url: string = `https://galleries.vowsuite.com/${gallery.gallery_id}`;
		e.preventDefault();
		flipContextMenu(isContextMenu);
		console.log("Copy click. Context Menu: ", isContextMenu);
		navigator.clipboard.writeText(url);
	};
	
	return gallery && (
		<div ref={ref} style={{ "display": "flex" }}>
			<button
				className="content-block__button"
				onClick={onContextClick}
			>
				<FontAwesomeIcon icon={faEllipsis} />
			</button>
			{isContextMenu && (
				<ContextMenu
					xPosition={points.x}
					yPosition={points.y}
					containerRef={ref}
					setIsContextMenu={setIsContextMenu}
				>
					<>
						<GalleryStudioModal
							folder_id={gallery.folder_id}
							gallery={gallery}
							setGalleries={setGalleries}
						>
							<ContextMenuListItem
								onClick={(e: MouseEvent) => e.preventDefault()}
								title="Rename"
								icon={faPencil}
							/>
						</GalleryStudioModal>
						<MoveGalleryToFolderModal
							gallery={gallery}
							setGalleries={setGalleries}
						>
							<ContextMenuListItem
								onClick={(e: MouseEvent) => e.preventDefault()}
								title="Move to Folder"
								icon={faFileImport}
							/>
						</MoveGalleryToFolderModal>
						<ContextMenuListItem
							onClick={onCopyClick}
							title="Copy Share Link"
							icon={faShareAlt}
						/>
						<DeleteButton
							item={gallery}
							id={gallery.gallery_id}
							deleteService={deleteGallery}
							cleanupService={getGalleriesByFolderID}
							setItems={setGalleries}
							cleanup_id={gallery.folder_id}
							closeContextMenu={() => setIsContextMenu(false)}
						/>
					</>
				</ContextMenu>
			)}
		</div>
	);
};