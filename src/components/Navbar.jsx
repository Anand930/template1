import React from "react";
import "./Navbar.css";
import mode from "../assets/light-mode.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <ul>
          <li>About</li>
          <li>Articles</li>
          <li>Projects</li>
          <li>Speaking</li>
          <li>Uses</li>
        </ul>
      
        <img src={mode} width={"24px"} height={"24px"} alt="" />
      
      </div>
    </>
  );
};

export default Navbar;
