import React from "react";

import Image1 from "./banner1.webp";
import Image2 from "./banner2.png";

import Image3 from "./banner6.jpg";
import "./TopSlider.css";

// Custom Dot component for the carousel

// Styled dot using styled-components
const OverLayText = () => {
  return (
    <div className="carousel-caption d-none d-md-flex">
      <p className="fs-3 fw-bold">WELCOME TO LOGO</p>
      <div className="fw-bold fs-1 ">
        <em>
          Hardwork is the best
          <br />
          key success in Life.
        </em>
      </div>
      <div className="d-flex m-2">
        <div className="box-3 mx-2">
          <div className="btn btn-three">
            <span>Discover More</span>
          </div>
        </div>
        <div className="box-4">
          <div className="btn btn-three">
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopSlider = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Image1} className="d-block w-100" alt="..." />
          <OverLayText />
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100" alt="..." />
          <OverLayText />
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100" alt="..." />
          <OverLayText />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TopSlider;
