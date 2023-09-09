import { faEllipsis, faFileImport, faPencil, faShareAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, MouseEvent } from "react";
import { ContextMenu } from "../menus/context-menu";
import { MenuItem } from "src/models/menu-item";

// mouse coordinates
interface Points {
	x: number;
	y: number;
};

export const GalleryContextMenuButton: React.FC = () => {
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
	const renameGallery = (e: any) => {
		e.preventDefault();
		console.log("Rename");
	};
	const deleteGallery = (e: any) => {
		e.preventDefault();
		console.log("Delete");
	};
	const moveToFolder = (e: any) => {
		e.preventDefault();
		console.log("Move");
	};
	const copyShareLink = (e: any) => {
		e.preventDefault();
		console.log("Copy");
	};
	const menuItems: Array<MenuItem> = [
			{
				title: "Rename",
				icon: faPencil,
				action: renameGallery
			},
			{
				title: "Move To Folder",
				icon: faFileImport,
				action: moveToFolder
			},
			{
				title: "Copy Share Link",
				icon: faShareAlt,
				action: copyShareLink
			},
			{
				title: "Delete",
				icon: faTrash,
				action: deleteGallery
			}
	];
	
	return (
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
					menuItems={menuItems}
					onContextClick={onContextClick}
				/>
			)}
		</>
	);
};