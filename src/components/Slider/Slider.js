"use client";

import { useState } from "react";

import Image from "next/image";

import arrowLeft from "@/accets/svg/sliderArrow_left.svg";
import arrowRight from "@/accets/svg/sliderArrow_right.svg";

export const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="slider_container">
      <div className="slider">
        {data.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={item.label}
              className={isActive ? "slider_item--active" : "slider_item"}
            >
              <Image src={item.src} alt={item.label} className="slider_img" />
              <div className="sliderLabel_wrap">
                <h3 className="slider_label">{item.label}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="slider_buttons">
        <button onClick={prevSlide}>
          <Image src={arrowLeft} alt="left arrow" />
        </button>
        <button onClick={nextSlide}>
          <Image src={arrowRight} alt="right arrow" />
        </button>
      </div>
    </div>
  );
};
