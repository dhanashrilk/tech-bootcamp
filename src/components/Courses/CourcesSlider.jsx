import React, { useState, useEffect } from "react";
import "./CourseSlider.css";

const CourcesSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextCard();
    }, 10000); // Change interval time as needed

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [currentIndex]);

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const goToPrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const visibleCards = 3;

  const visibleCardIndices = [...Array(visibleCards).keys()].map(
    (i) => (currentIndex + i) % totalCards
  );

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-2">
        <div>
          <p className="fs-1 fw-bold">Our Courses</p>
        </div>
        <div className="button1">
          <button
            className="carousel__button prev"
            onClick={goToPrevCard}
            style={cssClass}
          >
            &#10094;
          </button>
          <button
            className="carousel__button next"
            onClick={goToNextCard}
            style={cssClass}
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="carousel">
        <div className="carousel__cards m-1">
          {visibleCardIndices.map((index) => (
            <div key={index} className="carousel__card">
              {cards[index]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const cssClass = {
  padding: "10px",
  background: "#ff7350",
  border: "none",
  color: "#fff",
  width: "40px",
  margin: "0 10px 0 0",
};

export default CourcesSlider;
