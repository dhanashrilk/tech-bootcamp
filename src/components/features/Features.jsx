import React from "react";
import Image from "./student9.avif";
import { FaUsers } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import "./Features.css";
import { TbCashRegister } from "react-icons/tb";
import { MdTagFaces } from "react-icons/md";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <h1 className="fs-1 fw-bold py-2 px-2 m-3 text-light">Our Features</h1>
        <p className="fs-6 fw-lighter py-2 px-2 m-3 text-light">
          We provide specialized education, training, and research
          opportunities, often focusing on skill development in specific fields.
        </p>
        <div className="position-relative d-flex">
          <span className="icons">
            <GiTeacher className="fs-1 m-3" />
          </span>
          <div>
            <p className="fs-4 fw-bold px-2 mt-3 mb-0 text-light">
              Skilled Teachers
            </p>
            <p className="fs-6 fw-lighter px-2 text-light">
              Skilled teachers possess deep subject knowledge, effective
              teaching methods, and the ability to inspire and engage students
              for meaningful learning.
            </p>
          </div>
        </div>
        <div className="position-relative d-flex">
          <span className="icons">
            <TbCashRegister className="fs-1 m-3" />
          </span>
          <div>
            <p className="fs-4 fw-bold px-2 mt-3 mb-0 text-light">
              Affordable Courses
            </p>
            <p className="fs-6 fw-lighter px-2 text-light">
              Affordable courses offer high-quality education and training at a
              cost accessible to a wide range of learners, ensuring value
              without financial burden.
            </p>
          </div>
        </div>
        <div className="position-relative d-flex">
          <span className="icons">
            <MdTagFaces className="fs-1 m-3" />
          </span>
          <div>
            <p className="fs-4 fw-bold px-2 mt-3 mb-0 text-light">
              Efficient & Flexible
            </p>
            <p className="fs-6 fw-lighter px-2 text-light">
              Efficient and flexible programs optimize learning with
              well-structured content and adaptable schedules, catering to
              diverse student needs and time constraints.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={Image} alt="" className="image" />
      </div>
    </div>
  );
};

export default Features;
