import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelopeAt } from "react-icons/bs";

import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-100% upper-nav">
      <nav className="navbar navbar-expand-lg  upper-nav1 ">
        <div className="container-fluid px-4">
          <ul className="nav me-auto">
            <li className="nav-item px-2 pt-2">Follow us:-</li>
            <li className="nav-item pt-2 px-2">
              <FaFacebookF />
            </li>
            <li className="nav-item pt-2 px-2">
              <FaInstagram />
            </li>
            <li className="nav-item pt-2 px-2">
              <FaTwitter />
            </li>
            <li className="nav-item pt-2 px-2">
              <FaYoutube />
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav ms-auto px-3">
              <li className="nav-item d-flex px-2 ">
                <div className="px-2 fs-3" style={{ color: "#ff7350" }}>
                  <FiPhoneCall />{" "}
                </div>
                <div className="fw-semibold" style={{ fontSize: "14px" }}>
                  <p className="m-0" style={{ textAlign: "left" }}>
                    Call Now!
                  </p>
                  <p className="m-0">+91 8833722944</p>
                </div>
              </li>
              <li className="nav-item d-flex px-2">
                <div className="px-2 fs-3" style={{ color: "#ff7350" }}>
                  <BsEnvelopeAt />{" "}
                </div>
                <div className="fw-semibold" style={{ fontSize: "14px" }}>
                  <p className="m-0" style={{ textAlign: "left" }}>
                    Email Now!
                  </p>
                  <p className="m-0">info@example.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Navbar />
    </div>
  );
};

export default Header;
