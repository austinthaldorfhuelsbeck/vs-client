import { useAuth0 } from "@auth0/auth0-react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { ApiResponse } from "src/models/api-response";
import { Company } from "src/models/company";
import { Folder } from "src/models/folder";
import { getCompany } from "src/services/companies.service";
// import { Folder } from "src/models/folder";

interface Props {
  company: Company | null;
  folders: Array<Folder | null>;
  setFolders: Dispatch<SetStateAction<Array<Folder | null>>>;
}

export const FoldersSelector: React.FC<Props> = ({
  company,
  folders,
  setFolders
}) => {
  const { getAccessTokenSilently } = useAuth0();

  // Load company from API with folders
  useEffect(() => {
    const getCompanyResponse = async (id: number) => {
      const audienceUrl = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceUrl,
            scope: "read:current_user"
          }
        });

        const companyResponse: ApiResponse = await getCompany(accessToken, id);

        setFolders(companyResponse.data.folders);
      } catch (error: any) {
        console.log(error);
      };
    };

    if (company) getCompanyResponse(company.company_id);
  }, [company, getAccessTokenSilently, setFolders]);

  return (
    <div className="content-layout">
      <span>Folders</span>
      <button>New Folder</button>
      {folders && (
        folders.map((folder: Folder | null) => folder && (
          <span>{folder.folder_name}</span>
        ))
      )}
    </div>
  )
}