import React from "react";
import "./Home.component.scss";
import homeImage from "../../../assets/images/Group 5395.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div id="home" className="home">
        <div className="bgitem"></div>
        <div className="container">
          <div className="home-row">
            <div className="home-content">
              <h1 className="title">
                <span>Studying</span> Online is now much easier
              </h1>
              <span className="text">
                Skilline is an interesting platform that will teach you in more
                an interactive way
              </span>
              <div className="home-actions">
                <button>Join for free</button>
                <div className="icon">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <span>Watch how it works</span>
              </div>
            </div>
            <img className="home-image" src={homeImage} alt="home-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
