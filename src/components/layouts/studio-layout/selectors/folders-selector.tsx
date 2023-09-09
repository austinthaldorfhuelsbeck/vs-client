import React, { Dispatch, SetStateAction } from "react";
import { Folder } from "src/models/folder";
import { FoldersSelectorListItem } from "./folders-selector-li";

interface Props {
  folders: Array<Folder | null>;
  selectedFolder: Folder | null;
  setSelectedFolder: Dispatch<SetStateAction<Folder | null>>;
};

export const FoldersSelector: React.FC<Props> = ({
  folders,
  selectedFolder,
  setSelectedFolder
}) => {
  // map folders to list items
  const listFolders = (folders: Array<Folder | null>) => {
    return (
      folders?.map(
        (folder: Folder | null) => folder ? (
          <FoldersSelectorListItem
            key={folder.folder_id}
            folder={folder}
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
            />
        ) :
        <></>
      )
    );
  };

  return (
    <ul>
      {folders[0] && listFolders( folders )}
    </ul>
  )
}