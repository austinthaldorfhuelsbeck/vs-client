import React, { Dispatch, SetStateAction } from "react";
import { Folder } from "src/models/folder";

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
      className={
        (folder?.folder_id === selectedFolder?.folder_id) ?
        "nav-bar__tab nav-bar__tab--active" :
        "nav-bar__tab"
      }
      onClick={() => setSelectedFolder(folder)}
    >
      {folder?.folder_name}
    </li>
  );
};