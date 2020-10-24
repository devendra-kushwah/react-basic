import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="dashboard" style={{ margin: "12px" }}>
        dashboard
      </NavLink>
      <NavLink to="/login" style={{ margin: "12px" }}>
        Login
      </NavLink>
    </div>
  );
};

export default Header;
