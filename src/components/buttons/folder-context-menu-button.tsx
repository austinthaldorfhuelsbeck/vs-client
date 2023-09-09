import { faEllipsisVertical, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEvent, useState } from "react";
import { ContextMenu } from "../menus/context-menu";
import { MenuItem } from "src/models/menu-item";

// mouse coordinates for context menu
interface Points {
  x: number;
  y: number;
};

export const FolderContextMenuButton: React.FC = () => {
	// context menu display state
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
	const renameFolder = (e: any) => {
		e.preventDefault();
		console.log("Rename");
  };
  const deleteFolder = (e: any) => {
      e.preventDefault();
      console.log("Delete");
  };
  const menuItems: Array<MenuItem> = [
      {
          title: "Rename",
          icon: faPencil,
          action: renameFolder
      },
      {
          title: "Delete",
          icon: faTrash,
          action: deleteFolder
      }
  ];
	
	return (
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
          menuItems={menuItems}
					onContextClick={onContextClick}
        />
      )}
		</>
	);
};