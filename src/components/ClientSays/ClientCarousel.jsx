import React from "react";
import Slider from "react-slick";
import "./ClientCarousel.css";
// import "./CardSlider.css"; // Custom styles (optional)

const CardSlider = () => {
  const settings = {
    dots: true, // Show navigation dots
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
          dots: true,
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

  return (
    <>
      <div className="card-slider container py-4">
        <h2> What Our Student Says.. </h2>
        <Slider {...settings}>
          <figure class="snip1390">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
              alt="profile-sample3"
              class="profile"
            />
            <figcaption>
              <h2>Eleanor Crisp</h2>
              <h4>UX Design</h4>
              <blockquote>
                The institute offers exceptional education with skilled
                instructors, modern facilities, and a supportive learning
                environment that fosters success.
              </blockquote>
            </figcaption>
          </figure>

          <figure class="snip1390">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
              alt="profile-sample6"
              class="profile"
            />
            <figcaption>
              <h2>Sue Shei</h2>
              <h4>Public Relations</h4>
              <blockquote>
                The institute offers exceptional education with skilled
                instructors, modern facilities, and a supportive learning
                environment that fosters success.
              </blockquote>
            </figcaption>
          </figure>
          <figure class="snip1390">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
              alt="profile-sample3"
              class="profile"
            />
            <figcaption>
              <h2>Eleanor Crisp</h2>
              <h4>UX Design</h4>
              <blockquote>
                The institute offers exceptional education with skilled
                instructors, modern facilities, and a supportive learning
                environment that fosters success.
              </blockquote>
            </figcaption>
          </figure>

          <figure class="snip1390">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
              alt="profile-sample6"
              class="profile"
            />
            <figcaption>
              <h2>Sue Shei</h2>
              <h4>Public Relations</h4>
              <blockquote>
                The institute offers exceptional education with skilled
                instructors, modern facilities, and a supportive learning
                environment that fosters success.
              </blockquote>
            </figcaption>
          </figure>
          <figure class="snip1390">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
              alt="profile-sample3"
              class="profile"
            />
            <figcaption>
              <h2>Eleanor Crisp</h2>
              <h4>UX Design</h4>
              <blockquote>
                The institute offers exceptional education with skilled
                instructors, modern facilities, and a supportive learning
                environment that fosters success.
              </blockquote>
            </figcaption>
          </figure>

          <figure class="snip1390">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
              alt="profile-sample6"
              class="profile"
            />
            <figcaption>
              <h2>Sue Shei</h2>
              <h4>Public Relations</h4>
              <blockquote>
                The institute offers exceptional education with skilled
                instructors, modern facilities, and a supportive learning
                environment that fosters success.
              </blockquote>
            </figcaption>
          </figure>
        </Slider>
      </div>
      {/* Cards Section */}
    </>
  );
};

export default CardSlider;
