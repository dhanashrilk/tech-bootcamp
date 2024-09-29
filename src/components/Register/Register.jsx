import React from "react";
import "./Register.css";
import { FaUsers } from "react-icons/fa6";
import { PiChalkboardTeacher } from "react-icons/pi";
import { SiWorkplace } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const Register = () => {
  return (
    <div className="register">
      <div className="container register1">
        <div className="row">
          <div className="col-md-3 col-sm-12 my-2">
            <div className="first-card d-flex flex-column justify-content-center">
              <span className="icons-style">
                <FaUsers />
              </span>
              <p>Total Learners</p>
              <h3>200+</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 my-2">
            <div className="first-card d-flex flex-column justify-content-center">
              <span className="icons-style">
                <PiChalkboardTeacher />
              </span>
              <p>Total Tutors</p>
              <h3>10+</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 my-2">
            <div className="first-card d-flex flex-column justify-content-center">
              <span className="icons-style">
                <SiWorkplace />
              </span>
              <p>Total Placement</p>
              <h3>80+</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 my-2">
            <div className="first-card d-flex flex-column justify-content-center">
              <span className="icons-style">
                <LiaLaptopCodeSolid />
              </span>
              <p>Total Courses</p>
              <h3>6</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
