import { faFolder, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";
import { Folder } from "src/models/folder";
import { FolderContextMenuButton } from "../buttons/folder-context-menu-button";

interface Props {
  folder: Folder | null;
  selectedFolder: Folder | null;
  setSelectedFolder: Dispatch<SetStateAction<Folder | null>>;
}

export const FoldersSelectorListItem: React.FC<Props> = ({
  folder,
  selectedFolder,
  setSelectedFolder
}) => {
  return (
    <li
      className="content-block__tab"
      onClick={() => setSelectedFolder(folder)}
    >
      {(folder?.folder_name === "Uncategorized") ?
        <FontAwesomeIcon icon={faThLarge} /> :
        <FontAwesomeIcon icon={faFolder} />}
      <span
        className={
          (folder?.folder_id === selectedFolder?.folder_id) ?
          "content-block__title--active" :
          "content-block__title"
        }
      >
        {folder?.folder_name}
      </span>
      <FolderContextMenuButton />
    </li>
  );
};