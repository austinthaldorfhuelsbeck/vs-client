import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { PageLayout } from "./page-layout";
import { UserProfile } from "src/models/user-profile";
import { getUserByEmail } from "src/services/users.service";

export const Gallery: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState<UserProfile | null>(null);

  useEffect(() => {
    const getUserMetadata = async (email: string) => {
      const audienceUrl = process.env.REACT_APP_AUTH0_AUDIENCE;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audienceUrl,
            scope: "read:current_user"
          }
        });

        const metadataResponse = await getUserByEmail(accessToken, email);

        setUserMetadata(metadataResponse.data);
      } catch (error: any) {
        // console.log("Error!")
        console.log(error);
      };
    };
    if (user && user.email) getUserMetadata(user.email);
  }, [getAccessTokenSilently, user]);

  const renderCompanies = () => {
    if (userMetadata && userMetadata.companies.length) {
      return (
        <>
          <span>Your companies:</span>
          <br />
          <span>{JSON.stringify(userMetadata.companies, null, 2)}</span>
        </>
      )
    } else if (userMetadata?.companies.length === 0) {
      return (
        <span>Looks like you don't have any companies yet.</span>
      )
    } else {
      return <span>Loading...</span>
    };
  };

  return (
    isAuthenticated ? (
        <PageLayout>
          <div className="content-layout">
            <div className="content__body">
              {user ? `Welcome back, ${user.name}!` : "Loading..."}
              <br />
              {renderCompanies()}
            </div>
          </div>
        </PageLayout>
      ) : (
        <></>
      )
  );
};
