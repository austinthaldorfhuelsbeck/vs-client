import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { PageLayout } from "./page-layout";
import { UserProfile } from "src/models/user-profile";
import { getUserByEmail } from "src/services/users.service";
import { CompaniesSelector } from "./selectors/companies-selector";
import { Company } from "src/models/company";
import { FoldersSelector } from "./selectors/folders-selector";
import { Folder } from "src/models/folder";
import { ApiResponse } from "src/models/api-response";
import { getCompany } from "src/services/companies.service";

export const Studio: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userProfile, setuserProfile] = useState<UserProfile | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [folders, setFolders] = useState<Array<Folder | null>>([]);
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);

  // Load Auth0 user into state with metadata from db
  useEffect(() => {
    const getUserProfileResponse = async (email: string) => {
      const audienceUrl = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceUrl,
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
      const audienceUrl = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceUrl,
            scope: "read:current_user"
          }
        });

        const selectedCompanyResponse: ApiResponse = await getCompany(accessToken, id);

        setFolders(selectedCompanyResponse.data.folders);
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
            Galleries
          </div>
        </div>
      </PageLayout>
  );
};
