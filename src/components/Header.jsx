import React, { useState, useEffect } from "react";
import noteLogo from "../assets/images/noteLogo.png";
import favicon from "../../public/favicon.ico";

const Header = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    const navbarMenu = document.querySelector("#nav-links");
    navbarMenu.style.display = isActive ? "none" : "block";
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="navbar has-shadow is-primary">
        <div className="navbar-brand">
          <a href="" className="navbar-item">
            <img
              src={favicon}
              alt="logo"
              style={{ maxHeight: "70px" }}
              className="py-2 px-2"
            />
          </a>
          <a className="navbar-burger" id="burger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="navbar-menu" id="nav-links">
          <div className="navbar-end">
            <a href="" className="navbar-item">
              Documentation
            </a>
            <a href="" className="navbar-item">
              Other
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
