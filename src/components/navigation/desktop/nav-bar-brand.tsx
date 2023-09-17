import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__brand">
      <NavLink to={isAuthenticated ? "/studio" : "/"}>
        <h1 className="nav-bar__logo">Vowsuite</h1>
      </NavLink>
    </div>
  );
};
