import React, { useState } from "react";
import { Folder } from "src/models/folder";
import { Gallery } from "src/models/gallery";
import { FolderLayoutListItem } from "../selectors/folder-layout-li";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { InlineButton } from "../buttons/inline-button";
import { StudioModal } from "../modals/studio-modal";

interface Props {
  galleries: Array<Gallery | null>;
  selectedFolder: Folder | null;
};

export const FolderLayout: React.FC<Props> = ({
  galleries,
  selectedFolder
}) => {
  // state for modal new gallery form
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <div className="content-block-layout__galleries">
      <div className="content-block__container">
        <h4 className="content-block__title">{selectedFolder?.folder_name}</h4>
        <InlineButton
          onClick={() => setModalIsOpen(true)}
          icon={faPlus}
          title="New Gallery"
        />
        <StudioModal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        >
          <p>
            New gallery!
          </p>
        </StudioModal>
      </div>
      <ul>
        {galleries?.map((gallery: Gallery | null) => gallery && (
            <FolderLayoutListItem
              key={gallery.gallery_id}
              gallery={gallery}
            />
          )
        )}
      </ul>
    </div>
  );
};