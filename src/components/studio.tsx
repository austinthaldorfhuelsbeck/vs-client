import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { PageLayout } from "./page-layout";
import { UserProfile } from "src/models/user-profile";
import { getUserByEmail } from "src/services/users.service";
import { CompaniesSelector } from "./selectors/companies-selector";
import { Company } from "src/models/company";
import { FoldersSelector } from "./selectors/folders-selector";
import { Folder } from "src/models/folder";

export const Studio: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userProfile, setuserProfile] = useState<UserProfile | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [folders, setFolders] = useState<Array<Folder | null>>([]);

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

  // Set company as first in list
  useEffect(() => {
    if (userProfile) {
      setCompany(userProfile.companies[0]);
    };
  }, [userProfile]);


  return (
      <PageLayout>
        <div className="studio-layout">
          <div className="content__body">
            <CompaniesSelector
              userProfile={userProfile}
              company={company}
              setCompany={setCompany}
            />
            <FoldersSelector
              company={company}
              folders={folders}
              setFolders={setFolders}
            />
            {/* <GalleryList galleries={galleries} /> */}
          </div>
        </div>
      </PageLayout>
  );
};
