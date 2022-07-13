import React from "react";
import "./Integrations.component.scss";
import img5402 from "../../../assets/images/Group 5402.png";

const Integrations = () => {
  return (
    <>
      <div className="container">
        <div className="integrations">
          <img src={img5402} alt="" />
          <div className="box">
            <div className="label">INTEGRATIONS</div>
            <h4>
              200+ educational tools and platform <span>integrations</span>
            </h4>
            <p>
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>
            <button>See All Integrations</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
