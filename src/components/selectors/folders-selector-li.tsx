import { faFolder, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        "content-block__tab content-block__tab--active" :
        "content-block__tab"
      }
      onClick={() => setSelectedFolder(folder)}
    >
      <h5>
        {(folder?.folder_name === "Uncategorized") ?
          <FontAwesomeIcon icon={faThLarge} /> :
          <FontAwesomeIcon icon={faFolder} />}
        &nbsp;
        {folder?.folder_name}
      </h5>
    </li>
  );
};