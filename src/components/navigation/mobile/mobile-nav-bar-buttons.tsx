import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../../buttons/navigation/login-button";
import { LogoutButton } from "src/components/buttons/navigation/logout-button"; 
import { SignupButton } from "src/components/buttons/navigation/signup-button";
export const MobileNavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__buttons">
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
