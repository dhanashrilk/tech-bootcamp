import React from "react";
import Slider from "react-slick";
import Image from "./nagarro-logo.png";
import Image1 from "./altimetrik.png";
import Image2 from "./devon.png";
import Image3 from "./intel.png";
import Image4 from "./publicis.png";
// import "./CardSlider.css"; // Custom styles (optional)

const settings = {
  dots: false, // Show navigation dots
  infinite: true, // Loop the slides
  speed: 500, // Transition speed
  slidesToShow: 4, // Number of cards to show at once
  slidesToScroll: 1, // Scroll one card at a time
  autoplay: true, // Enable automatic slide movement
  autoplaySpeed: 3000, // Speed of auto-play in milliseconds
  responsive: [
    {
      breakpoint: 1024, // For tablet or small desktop
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600, // For mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const RecruitSlider = () => {
  return (
    <>
      <div className="card-slider py-4 container">
        <h2 className="text-center"> Top Company Recruiting with Us </h2>
        <Slider {...settings}>
          <img src={Image} alt="" />
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
          <img src={Image4} alt="" />
        </Slider>
      </div>
    </>
  );
};

export default RecruitSlider;
