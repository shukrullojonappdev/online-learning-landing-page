import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.component.scss";
import logo from "../../../assets/images/Group 5394.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <div className="actions">
          <nav className="navigation">
            <a href="#home" className="link">
              Home
            </a>
            <a href="#careers" className="link">
              Careers
            </a>
            <a href="#blog" className="link">
              Blog
            </a>
            <a href="#about-us" className="link">
              About Us
            </a>
          </nav>
          <div className="auth">
            <button className="btn login">Login</button>
            <button className="btn sign-up">Sign Up</button>
          </div>
        </div>
        <div className="burger">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </>
  );
};

export default Header;
