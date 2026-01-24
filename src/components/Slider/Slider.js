"use client";

import { useState } from "react";

import Image from "next/image";
import arrowSvgBig from "@/accets/svg/arrowUp_big.svg";


export const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="sliderContainer">
      <div className="slider">
        {data.map((item, index) => (
          <div
            key={item.label}
            className={`sliderItem ${index === currentIndex ? sliderItem.active : ""}`}
          >
            <Image src={item.src} alt={item.label}  />
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>
        <Image src={arrowSvgBig} alt="Big arrow" />
      </button>
      <button onClick={nextSlide}>
        <Image src={arrowSvgBig} alt="Big arrow" />
      </button>
    </div>
  );
};
