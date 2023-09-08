import React from "react";
import { Folder } from "src/models/folder";
import { Gallery } from "src/models/gallery";
import { FolderLayoutListItem } from "../selectors/folder-layout-li";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  galleries: Array<Gallery | null>;
  selectedFolder: Folder | null;
};

export const FolderLayout: React.FC<Props> = ({
  galleries,
  selectedFolder
}) => {
  return (
    <div className="content-block-layout__galleries">
      <div className="content-block__container">
        <h4 className="content-block__title">{selectedFolder?.folder_name}</h4>
        <button className="button">
          <FontAwesomeIcon icon={faPlus} />
          &nbsp;
          New Gallery
        </button>
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