import React from "react";
import { Link } from "react-router-dom";

const NavBarLink = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
};

export default NavBarLink;
