import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { PageLayout } from "./page-layout";

export const ProfilePage: React.FC = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="content-layout">
        <div className="content__body">
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
