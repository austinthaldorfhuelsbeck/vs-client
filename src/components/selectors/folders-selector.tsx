import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { Folder } from "src/models/folder";
import { FoldersSelectorListItem } from "./folders-selector-li";
import { InlineButton } from "../buttons/inline-button";
import { StudioModal } from "../modals/studio-modal";
import { Company } from "src/models/company";
import { NewFolderForm } from "../forms/new-folder-form";
import { useAuth0 } from "@auth0/auth0-react";
import { getCompany } from "src/services/companies.service";
import { ApiResponse } from "src/models/api-response";

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