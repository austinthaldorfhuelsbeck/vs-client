import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
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

  const listFolders = (folders: Array<Folder | null>) => {
    return (
      folders?.map(
        (folder: Folder | null) => folder ? (
          <>
            <FoldersSelectorListItem
              key={folder.folder_id}
              folder={folder}
              selectedFolder={selectedFolder}
              setSelectedFolder={setSelectedFolder}
            />
          </>
        ) :
        <></>
      )
    );
  };

  return (
    <div className="content-block-layout__folders">
      <h4 className="content-block__title">Folders</h4>
      <button className="button">
        <FontAwesomeIcon icon={faFolderPlus} />
        &nbsp;
        New Folder
      </button>
      <ul>
        {folders[0] && listFolders( folders )}
      </ul>
    </div>
  )
}