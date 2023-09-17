import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../../buttons/navigation/login-button";
import { LogoutButton } from "src/components/buttons/navigation/logout-button";
import { SignupButton } from "src/components/buttons/navigation/signup-button"; 

export const NavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};
