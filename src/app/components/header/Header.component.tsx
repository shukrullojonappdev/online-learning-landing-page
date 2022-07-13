import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import "./Header.component.scss";
import logo from "../../../assets/images/Group 5394.svg";

const Header = () => {
  function openMenu() {
    const body = document.querySelector("body");
    const nav = document.querySelector(".actions");

    body?.classList.add("hide");
    nav?.classList.add("opened");
    nav?.classList.remove("closed");
  }

  function closeMenu() {
    const body = document.querySelector("body");
    const nav = document.querySelector(".actions");

    body?.classList.remove("hide");
    nav?.classList.remove("opened");
    nav?.classList.add("closed");
  }

  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
        <div className="actions closed">
          <nav className="navigation">
            <FontAwesomeIcon
              className="close"
              onClick={() => closeMenu()}
              icon={faClose}
            />
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
        <div className="burger" onClick={() => openMenu()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </>
  );
};

export default Header;
