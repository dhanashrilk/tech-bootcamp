import React from "react";
import Image from "./contact.avif";
import "./Contact.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container contact p-4">
      <div className="row">
        <div className="contact-form col-md-6 col-sm-12">
          <h1 className="fs-1 fw-bold py-2 my-3 text-light">Get in Touch</h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Phone Number
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Comment
              </label>
              <textarea
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="button-container-2 m-0 float-right">
              <span className="mas">
                {" "}
                Submit Now{" "}
                <span>
                  <FaArrowRightLong />
                </span>
              </span>
              <button type="button" name="Hover" className="w-100">
                Submit Now{" "}
                <span>
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Image} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
