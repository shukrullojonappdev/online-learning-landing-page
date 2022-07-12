import React from "react";
import "./Companies,component.scss";
import companiesGroup from "../../../assets/images/Group 16.png";

const Companies = () => {
  return (
    <>
      <div className="companies">
        <div className="container">
          <p>Trusted by 5,000+ Companies Worldwide</p>
          <img src={companiesGroup} alt="companies" />
        </div>
      </div>
    </>
  );
};

export default Companies;
