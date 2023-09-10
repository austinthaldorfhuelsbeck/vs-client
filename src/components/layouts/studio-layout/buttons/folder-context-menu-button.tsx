import { faEllipsisVertical, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { ContextMenu } from "../../../menus/context-menu";
import { Folder } from "src/models/folder";
import { ContextMenuListItem } from "src/components/menus/context-menu-li";
import { FolderStudioModal } from "../modals/folder-studio-modal";

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

	// context menu items
  const deleteFolder = (e: any) => {
      e.preventDefault();
      console.log("Delete");
  };
	
	return folder && (
		<>
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
					setIsContextMenu={setIsContextMenu}
        >
					<>
						<FolderStudioModal
							company_id={folder.company_id}
							folder={folder}
							folders={folders}
							setFolders={setFolders}
						>
							<ContextMenuListItem
								onClick={(e: MouseEvent) => e.preventDefault()}
								title="Rename"
								icon={faPencil}
							/>
						</FolderStudioModal>
						<ContextMenuListItem
							onClick={deleteFolder}
							title="Delete"
							icon={faTrash}
						/>
					</>
				</ContextMenu>
      )}
		</>
	);
};