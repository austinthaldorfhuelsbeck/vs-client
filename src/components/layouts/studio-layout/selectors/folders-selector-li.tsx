import { faFolder, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";
import { Folder } from "src/models/folder";
import { FolderContextMenuButton } from "../buttons/folder-context-menu-button";

interface Props {
  folders: Array<Folder | null>;
  setFolders: Dispatch<SetStateAction<Array<Folder | null>>>;
  folder: Folder | null;
  selectedFolder: Folder | null;
  setSelectedFolder: Dispatch<SetStateAction<Folder | null>>;
};

export const FoldersSelectorListItem: React.FC<Props> = ({
  folders,
  setFolders,
  folder,
  selectedFolder,
  setSelectedFolder
}) => {
  // conditional rendering functions
  const renderIcon = (folder: Folder) => {
    return (folder.folder_name === "Uncategorized") ?
      <FontAwesomeIcon icon={faThLarge} /> :
      <FontAwesomeIcon icon={faFolder} />
  };
  const renderTitle = (folder: Folder) => {
    const spanClassName: string = (folder.folder_id === selectedFolder?.folder_id) ?
      "content-block__title--active" :
      "content-block__title";
    
    return (
      <span className={spanClassName}>{folder.folder_name}</span>
    );
  };
  const renderButton = (folder: Folder) => {
    return (folder.folder_name !== "Uncategorized") && (
      <FolderContextMenuButton
        folder={folder}
        folders={folders}
        setFolders={setFolders}
      />
    )
  }

  return folder && (
    <li
      className="content-block__tab"
      onClick={() => setSelectedFolder(folder)}
    >
      {renderIcon(folder)}
      {renderTitle(folder)}
      {renderButton(folder)}
    </li>
  );
};