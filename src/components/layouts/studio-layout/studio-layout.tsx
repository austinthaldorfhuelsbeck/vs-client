// Dependencies
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
// Models
import { UserProfile } from "src/models/user-profile";
import { Company } from "src/models/company";
import { Folder } from "src/models/folder";
// API Services
import { getUserByEmail } from "src/services/users.service";
// Components
import { PageLayout } from "../../page-layout";
import { FolderLayout } from "./folder-layout";
import { CompaniesSelector } from "src/components/layouts/studio-layout/selectors/companies-selector"; 
import { SidebarLayout } from "./sidebar-layout";

export const StudioLayout: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userProfile, setuserProfile] = useState<UserProfile | null>(null);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);

  // Load user metadata from Auth0 user object
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
            <SidebarLayout
              selectedCompany={selectedCompany}
              selectedFolder={selectedFolder}
              setSelectedFolder={setSelectedFolder}
            />
            <FolderLayout
              selectedFolder={selectedFolder}
            />
          </div>
        </div>
      </PageLayout>
  );
};
