import { useAuth0 } from "@auth0/auth0-react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ApiResponse } from "src/models/api-response";
import { Company } from "src/models/company";
import { Folder } from "src/models/folder";
import { getCompany } from "src/services/companies.service";
import { FoldersSelector } from "src/components/layouts/studio-layout/selectors/folders-selector";
import { FolderStudioModal } from "./modals/folder-studio-modal";
import { InlineButton } from "src/components/buttons/inline-button";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  selectedCompany: Company | null;
  selectedFolder: Folder | null;
  setSelectedFolder: Dispatch<SetStateAction<Folder | null>>;
};

export const SidebarLayout: React.FC<Props> = ({
  selectedCompany,
  selectedFolder,
  setSelectedFolder
}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [folders, setFolders] = useState<Array<Folder | null>>([]);

  // Load folders from selectedCompany
  useEffect(() => {
    const getCompanyResponse = async (id: number) => {
      const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceURL,
            scope: "read:current_user"
          }
        });

        const companyResponse: ApiResponse =  await getCompany(accessToken, id);

        setFolders(companyResponse.data.folders);
      } catch (error: any) {
        console.log(error);
      };
    };

    if (selectedCompany) getCompanyResponse(selectedCompany.company_id);
  }, [selectedCompany, getAccessTokenSilently])

  // Set selectedFolder as first in list
  useEffect(() => {
      setSelectedFolder(folders[0]);
  }, [folders, setSelectedFolder]);

  return selectedCompany && (
    <div className="content-block-layout__folders">
      <h4 className="content-block__header">Folders</h4>
      <FolderStudioModal
        setFolders={setFolders}
        company_id={selectedCompany.company_id}
        folder={null}
      >
        <InlineButton
          onClick={(e: MouseEvent) => e.preventDefault()}
          icon={faFolderPlus}
          title="New Folder"
        />
      </FolderStudioModal>
      <FoldersSelector
        folders={folders}
        setFolders={setFolders}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
    </div>
  )
};