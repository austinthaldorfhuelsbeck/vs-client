import { faEllipsis, faFileImport, faPencil, faShareAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, MouseEvent, Dispatch, SetStateAction } from "react";
import { ContextMenu } from "../../../menus/context-menu";
import { Gallery } from "src/models/gallery";
import { ContextMenuListItem } from "src/components/menus/context-menu-li";
import { DeleteButton } from "./delete-button";
import { GalleryStudioModal } from "../modals/gallery-studio-modal";
import { deleteGallery } from "src/services/galleries.service";
import { getGalleriesByFolderID } from "src/services/folders.service";

// mouse coordinates
interface Points {
	x: number;
	y: number;
};

interface Props {
	gallery: Gallery | null;
	galleries: Array<Gallery | null>;
	setGalleries: Dispatch<SetStateAction<Array<Gallery | null>>>;
};

export const GalleryContextMenuButton: React.FC<Props> = ({
	gallery,
	galleries,
	setGalleries
}) => {
	// menu display state
	const [isContextMenu, setIsContextMenu] = useState<boolean>(false);
	const [points, setPoints] = useState<Points>({
		x: 0,
		y: 0
	});
	
	// event handler for context menu button
	const onContextClick = (e: MouseEvent<HTMLButtonElement>) => {
		setIsContextMenu((currentState) => !currentState);
		setPoints({
			x: e.pageX,
			y: e.pageY
		});
	};
	
	return gallery && (
		<>
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
		</>
	);
};