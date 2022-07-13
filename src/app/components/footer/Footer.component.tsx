import React from "react";
import "./Footer.component.scss";
import img115 from "../../../assets/images/Group 115.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img src={img115} alt="" />
        <h6>Subscribe to get our Newsletter</h6>
        <div>
          <div className="row">
            <input placeholder="Your email" type="text" />
            <button>Subscribe</button>
          </div>
          <div className="row" style={{ marginBottom: 30 }}>
            <span>Careers</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
        <p>© 2021 Class Technologies Inc. </p>
      </footer>
    </>
  );
};

export default Footer;
