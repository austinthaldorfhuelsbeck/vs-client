/* eslint-disable no-restricted-globals */
import { faEllipsisVertical, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react";
import { ContextMenu } from "../../../menus/context-menu";
import { Folder } from "src/models/folder";
import { ContextMenuListItem } from "src/components/menus/context-menu-li";
import { FolderStudioModal } from "../modals/folder-studio-modal";
import { DeleteButton } from "./delete-button";
import { deleteFolder } from "src/services/folders.service";
import { getFoldersByCompanyID } from "src/services/companies.service";

// mouse coordinates
interface Points {
  x: number;
  y: number;
};

interface Props {
	folder: Folder | null;
	folders: Array<Folder | null>;
  setFolders: Dispatch<SetStateAction<Array<Folder | null>>>;
};

export const FolderContextMenuButton: React.FC<Props> = ({
	folder,
	folders,
	setFolders
}) => {
	// ref is for click outside
	const ref = useRef<HTMLDivElement>(null);
	
	// menu display state
	const [isContextMenu, setIsContextMenu] = useState<boolean>(false);
	const [points, setPoints] = useState<Points>({
		x: 0,
		y: 0
	});
	
	// event handler for context menu button
	const onContextClick = (e: MouseEvent<HTMLButtonElement>) => {
		setIsContextMenu((currentState: boolean) => !currentState);
		setPoints({
			x: e.pageX,
			y: e.pageY
		});
	};
	
	return folder && (
		<div ref={ref} className="content-block__align-right">
			<button
				className="content-block__button"
				onClick={onContextClick}
			>
				<FontAwesomeIcon icon={faEllipsisVertical} />
			</button>
			{isContextMenu && (
        <ContextMenu
          xPosition={points.x}
          yPosition={points.y}
					containerRef={ref}
					setIsContextMenu={setIsContextMenu}
        >
					<>
						<FolderStudioModal
							company_id={folder.company_id}
							folder={folder}
							setFolders={setFolders}
						>
							<ContextMenuListItem
								onClick={(e: MouseEvent) => e.preventDefault()}
								title="Rename"
								icon={faPencil}
							/>
						</FolderStudioModal>
						<DeleteButton
							item={folder}
							id={folder.folder_id}
							deleteService={deleteFolder}
							cleanupService={getFoldersByCompanyID}
							setItems={setFolders}
							cleanup_id={folder.company_id}
							closeContextMenu={() => setIsContextMenu(false)}
						/>
					</>
				</ContextMenu>
      )}
		</div>
	);
};