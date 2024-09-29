import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <li
            className="nav-item fs-3 fw-bold px-3"
            style={{ color: "#125875", listStyle: "none" }}
          >
            <span style={{ color: "#ff7350" }}>Lo</span>go
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flexGrow: "0" }}
          >
            <ul className="navbar-nav fw-medium ms-auto mb-2 mb-lg-0 navbar-second float-right">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link link-body-emphasis px-2"
                  aria-current="page"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div className="dropdown">
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link link-body-emphasis px-2">
                  Contact
                </a>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <a href="#" className="nav-link px-2">
                  <MdOutlineSearch />
                </a>
              </li>
            </ul>

            <div className="button-container-2 m-0 float-right">
              <span className="mas">Take Course</span>
              <button type="button" name="Hover">
                Take Course
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
