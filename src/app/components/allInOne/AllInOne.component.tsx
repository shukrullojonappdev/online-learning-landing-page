import {
  faCalendarDays,
  faFileLines,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./AllInOne.component.scss";

const AllInOne = () => {
  return (
    <>
      <div className="all-in-one">
        <h3>
          <span>All-In-One</span> Cloud Software
        </h3>
        <p>
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
        <div className="row">
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faFileLines} />
            </div>
            <div className="text">
              <h5>Online Billing, Invoicing, & Contracts</h5>
              <p>
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <div className="text">
              <h5>Easy Scheduling & Attendance Tracking</h5>
              <p>
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </div>
            <div className="text">
              <h5>Customer Tracking</h5>
              <p>
                Automate and track emails to individuals or groups. Skilline’s
                built-in system helps organize your organization{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllInOne;
