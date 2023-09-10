import React, { useEffect, useState } from "react";
import { Folder } from "src/models/folder";
import { Gallery } from "src/models/gallery";
import { FolderLayoutGallery } from "./selectors/folder-layout-gallery";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { InlineButton } from "../../buttons/inline-button";
import { useAuth0 } from "@auth0/auth0-react";
import { ApiResponse } from "src/models/api-response";
import { getFolder } from "src/services/folders.service";
import { GalleryStudioModal } from "./modals/gallery-studio-modal";

interface Props {
  selectedFolder: Folder | null;
};

export const FolderLayout: React.FC<Props> = ({
  selectedFolder
}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [galleries, setGalleries] = useState<Array<Gallery | null>>([]);

  // Load galleries from selectedFolder
  useEffect(() => {
    const getFolderResponse = async (id: number) => {
      const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceURL,
            scope: "read:current_user"
          }
        });

        const folderResponse: ApiResponse = await getFolder(accessToken, id);

        setGalleries(folderResponse.data.galleries);
      } catch (error: any) {
        console.log(error);
      };
    };

    if (selectedFolder) getFolderResponse(selectedFolder.folder_id);
  }, [getAccessTokenSilently, selectedFolder])

  return selectedFolder && (
    <div className="content-block-layout__galleries">
      <div className="content-block__container">
        <h4 className="content-block__header">{selectedFolder?.folder_name}</h4>
        <GalleryStudioModal
          setGalleries={setGalleries}
          folder_id={selectedFolder.folder_id}
          gallery={null}
        >
          <InlineButton
            onClick={(e: MouseEvent) => e.preventDefault()}
            icon={faPlus}
            title="New Gallery"
          />
        </GalleryStudioModal>
      </div>
      <ul>
        {galleries.map((gallery: Gallery | null) => gallery && (
            <FolderLayoutGallery
              key={gallery.gallery_id}
              gallery={gallery}
              galleries={galleries}
              setGalleries={setGalleries}
            />
          )
        )}
      </ul>
    </div>
  );
};