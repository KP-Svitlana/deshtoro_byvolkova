"use client";

import { useState } from "react";

import Image from "next/image";

import arrowLeft from "@/accets/svg/sliderArrow_left.svg";
import arrowRight from "@/accets/svg/sliderArrow_right.svg";

import { reviewsData } from "@/constants";
import { ImgSwitcher } from "../ImgSwitcher";

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length,
    );
  };
  return (
    <section className="section container">
      <h2 className="section_title">що кажуть наші клієнти</h2>
      <div className="reviewsSlider_list">
        {reviewsData.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={isActive ? "reviewsSlider_item--active" : "reviewsSlider_item"}
            >
              <ImgSwitcher
                img_desktop={item.src}
                img_mobile={item.src_m}
                className={"reviewsSlider_img"}
                alt={"фото відгука"}
                style={{objectFit: "contain"}}
              />

              <div className="reviewsSliderText_wrap">
                <h3 className="reviewsSlider_text">{item.text}</h3>
                <h4 className="reviewsSlider_userName">{item.userName}</h4>
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
      ;
    </section>
  );
};
