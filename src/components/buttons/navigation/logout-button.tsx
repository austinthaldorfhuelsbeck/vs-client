import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton: React.FC = () => {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <img
      className="nav-bar__profile-img"
      src={user?.picture}
      alt={user?.name}
      onClick={handleLogout}
    />
  );
};
