import React from "react";
import "./Testimonial.component.scss";
import img5403 from "../../../assets/images/Group 5403.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <>
      <div className="container">
        <div className="testimonial">
          <img src={img5403} alt="" />
          <div className="box">
            <div className="label">TESTIMONIAL</div>
            <h2>What They Say?</h2>
            <p>
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p>Are you too? Please give your assessment</p>
            <button>
              Write your assessment{" "}
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
