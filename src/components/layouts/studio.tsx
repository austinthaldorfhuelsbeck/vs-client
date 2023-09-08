// Dependencies
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
// Models
import { UserProfile } from "src/models/user-profile";
import { Company } from "src/models/company";
import { Folder } from "src/models/folder";
import { Gallery } from "src/models/gallery";
// API Services
import { ApiResponse } from "src/models/api-response";
import { getUserByEmail } from "src/services/users.service";
import { getCompany } from "src/services/companies.service";
import { getFolder } from "src/services/folders.service";
// Components
import { PageLayout } from "../page-layout";
import { CompaniesSelector } from "../selectors/companies-selector";
import { FoldersSelector } from "../selectors/folders-selector";
import { FolderLayout } from "./folder-layout";

export const Studio: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userProfile, setuserProfile] = useState<UserProfile | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [folders, setFolders] = useState<Array<Folder | null>>([]);
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [galleries, setGalleries] = useState<Array<Gallery | null>>([]);

  // Load Auth0 user into state with metadata from db
  useEffect(() => {
    const getUserProfileResponse = async (email: string) => {
      const audienceURL = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceURL,
            scope: "read:current_user"
          }
        });

        const metadataResponse = await getUserByEmail(accessToken, email);

        setuserProfile(metadataResponse.data);
      } catch (error: any) {
        console.log(error);
      };
    };

    if (user && user.email) getUserProfileResponse(user.email);
  }, [getAccessTokenSilently, user]);

  // Set selectedCompany as first in list
  useEffect(() => {
    if (userProfile) {
      setSelectedCompany(userProfile.companies[0]);
    };
  }, [userProfile]);

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
    if (folders) {
      setSelectedFolder(folders[0]);
    };
  }, [folders]);

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

  return (
      <PageLayout>
        <div className="studio-layout">
          <div className="content__body">
            <CompaniesSelector
              userProfile={userProfile}
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
            />
          </div>
          <div className="studio-layout__container content-block__body">
            <FoldersSelector
              folders={folders}
              selectedFolder={selectedFolder}
              setSelectedFolder={setSelectedFolder}
            />
            <FolderLayout
              galleries={galleries}
              selectedFolder={selectedFolder}
            />
          </div>
        </div>
      </PageLayout>
  );
};
