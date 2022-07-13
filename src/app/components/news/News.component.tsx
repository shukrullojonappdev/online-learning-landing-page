import React from "react";
import "./News.component.scss";
import img40 from "../../../assets/images/Group 40.png";
import img5404 from "../../../assets/images/Group 5404.png";
import img42 from "../../../assets/images/Group 42.png";
import img43 from "../../../assets/images/Group 43.png";

const News = () => {
  return (
    <>
      <div className="container">
        <div className="news">
          <h4>Lastest News and Resources</h4>
          <p>
            See the developments that have occurred to Skillines in the world
          </p>
          <div className="row">
            <div className="box">
              <img src={img40} alt="" />
              <div className="content">
                <span>NEWS</span>
                <h5>
                  Class adds $30 million to its balance sheet for a
                  Zoom-friendly edtech solution
                </h5>
                <p>
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
                <a href="#readMore">Read more</a>
              </div>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="img">
                  <img src={img5404} alt="" />
                  <span>PRESS RELEASE</span>
                </div>
                <div className="content">
                  <h6>
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h6>
                  <p>
                    Class Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={img42} alt="" />
                  <span>NEWS</span>
                </div>
                <div className="content">
                  <h6>
                    Zoom’s earliest investors are betting millions on a better
                    Zoom for schools
                  </h6>
                  <p>
                    Zoom was never created to be a consumer product.
                    Nonetheless, the...
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={img43} alt="" />
                  <span>NEWS</span>
                </div>
                <div className="content">
                  <h6>
                    Former Blackboard CEO Raises $16M to Bring LMS Features to
                    Zoom Classrooms
                  </h6>
                  <p>
                    This year, investors have reaped big financial returns from
                    betting on Zoom...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
