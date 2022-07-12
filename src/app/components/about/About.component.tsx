import React from "react";
import "./About.component.scss";
import img22 from "../../../assets/images/Group 22.png";
import img23 from "../../../assets/images/Group 23.png";
import img5397 from "../../../assets/images/Group 5397.png";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about">
          <h3>
            <span>What is</span> Skilline?
          </h3>
          <p>
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
          <div className="row">
            <div className="img">
              <div className="actions">
                <h4>FOR INSTRUCTORS</h4>
                <button>Start a class today</button>
              </div>
              <img src={img22} alt="img22" />
            </div>
            <div className="img">
              <div className="actions">
                <h4>FOR STUDENTS</h4>
                <button>Enter access code</button>
              </div>
              <img src={img23} alt="img23" />
            </div>
          </div>
          <div className="box">
            <div className="content">
              <div className="big-circle"></div>
              <h4>
                Everything you can do in a physical classroom,{" "}
                <span>you can do with Skilline</span>
              </h4>
              <p>
                Skilline’s school management software helps traditional and
                online schools manage scheduling, attendance, payments and
                virtual classrooms all in one secure cloud-based system.
              </p>
              <a href="#learnMore">Learn more</a>
            </div>
            <img src={img5397} alt="img5397" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
