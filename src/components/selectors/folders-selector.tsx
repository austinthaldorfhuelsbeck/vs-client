import React, { Dispatch, SetStateAction, MouseEvent, useState } from "react";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { Folder } from "src/models/folder";
import { FoldersSelectorListItem } from "./folders-selector-li";
import { InlineButton } from "../buttons/inline-button";
import { StudioModal } from "../modals/studio-modal";

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
  // state for modal new folder form
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // map folders to list items
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
      <InlineButton
        onClick={() => setModalIsOpen(true)}
        icon={faFolderPlus}
        title="New Folder"
      />
      <StudioModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <p>
          New folder!
        </p>
      </StudioModal>
      <ul>
        {folders[0] && listFolders( folders )}
      </ul>
    </div>
  )
}