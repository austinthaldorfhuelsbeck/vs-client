import React, { Dispatch, SetStateAction } from "react";
import { Folder } from "src/models/folder";
import { FoldersSelectorListItem } from "./folders-selector-li";

interface Props {
  folders: Array<Folder | null>;
  selectedFolder: Folder | null;
  setSelectedFolder: Dispatch<SetStateAction<Folder | null>>;
}

export const FoldersSelector: React.FC<Props> = ({
  folders,
  selectedFolder,
  setSelectedFolder
}) => {
  return (
    <div className="content-block-layout">
      <h4 className="content-block__title">Folders</h4>
      <button>New Folder</button>
      <ul>
        {folders && (
          folders.map((folder: Folder | null) => folder && (
            <FoldersSelectorListItem
              key={folder.folder_id}
              folder={folder}
              selectedFolder={selectedFolder}
              setSelectedFolder={setSelectedFolder}
            />
          ))
        )}
      </ul>
    </div>
  )
}