import React from "react";
import "./Features.component.scss";
import img5398 from "../../../assets/images/Group 5398.png";
import img122 from "../../../assets/images/Group 122.png";
import img92 from "../../../assets/images/Group 92.png";
import img124 from "../../../assets/images/Group 124.png";
import img106 from "../../../assets/images/Group 106.png";
import img5399 from "../../../assets/images/Group 5399.svg";
import img5400 from "../../../assets/images/Group 5400.svg";
import img5401 from "../../../assets/images/Group 5401.svg";

const Features = () => {
  return (
    <>
      <div className="container">
        <div className="features">
          <h3>
            Our <span>Features</span>
          </h3>
          <p>
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
          <div className="box">
            <div className="row">
              <img src={img5398} alt="img5398" />
              <div className="content">
                <h3>
                  A <span>user interface</span> designed for the classroom
                </h3>
                <div className="list">
                  <img src={img5399} alt="" />
                  <p>
                    Teachers don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </p>
                </div>
                <div className="list">
                  <img src={img5400} alt="" />
                  <p>
                    TA’s and presenters can be moved to the front of the class.
                  </p>
                </div>
                <div className="list">
                  <img src={img5401} alt="" />
                  <p>
                    Teachers can easily see all students and class data at one
                    time.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <img src={img122} alt="img5398" />
              <div className="content">
                <h3>
                  <span>Tools </span>For Teachers And Learners
                </h3>
                <p>
                  Class has a dynamic set of teaching tools built to be deployed
                  and used during class. Teachers can handout assignments in
                  real-time for students to complete and submit.
                </p>
              </div>
            </div>
            <div className="row">
              <img src={img92} alt="img5398" />
              <div className="content">
                <h3>
                  Assessments, <span>Quizzes</span>, Tests
                </h3>
                <p>
                  Easily launch live assignments, quizzes, and tests. Student
                  results are automatically entered in the online gradebook.
                </p>
              </div>
            </div>
            <div className="row">
              <img src={img124} alt="img5398" />
              <div className="content">
                <h3>
                  <span>Class Management</span> Tools for Educators
                </h3>
                <p>
                  Class provides tools to help run and manage the class such as
                  Class Roster, Attendance, and more. With the Gradebook,
                  teachers can review and grade tests and quizzes in real-time.
                </p>
              </div>
            </div>
            <div className="row">
              <img src={img106} alt="img5398" />
              <div className="content">
                <h3>
                  One-on-One <span>Discussions</span>
                </h3>
                <p>
                  Teachers and teacher assistants can talk with students
                  privately without leaving the Zoom environment.
                </p>
              </div>
            </div>
          </div>
          <button>See more features</button>
        </div>
      </div>
    </>
  );
};

export default Features;
