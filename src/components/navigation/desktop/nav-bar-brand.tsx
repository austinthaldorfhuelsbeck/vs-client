import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/"><h1 style={{ "color": "white" }}>Vowsuite</h1></NavLink>
    </div>
  );
};
