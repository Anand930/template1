import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import mode from "../assets/light-mode.png";
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="navbar-main">
        <ul>
          {/* <li>About</li>
          <li>Articles</li>
          <li>Projects</li>
          <li>Speaking</li>
          <li>Uses</li> */}
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/articles"}>Articles</Link></li>
          <li><Link to={"/projects"}>Projects</Link></li>
          <li><Link to={"/speaking"}>Speaking</Link></li>
          <li><Link to={"/uses"}>Uses</Link></li>
        </ul>
        <div className="menu-btn" onClick={() => setToggle(!toggle)}>
          Menu
        </div>

        <img src={mode} width={"24px"} height={"24px"} alt="" />

      </div>
      <div className={`${toggle ? "menu-navlink" : "menu-navlink-hidden"}`}>
        <div className="container">
          <div className="close-btn-container">
            <div className="navlink-header">
              Navigation
            </div>
            <div className="close-btn" onClick={() => setToggle(!toggle)}>
              X
            </div>
          </div>
          <ul>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/articles"}>Articles</Link></li>
          <li><Link to={"/projects"}>Projects</Link></li>
          <li><Link to={"/speaking"}>Speaking</Link></li>
          <li><Link to={"/uses"}>Uses</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
