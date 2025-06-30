import Video from "next-video";

import { ImgSwitcher } from "../ImgSwitcher";

import myVideo from "../../../videos/mov_hero_desktop.mov.json";

import name_desktop from "@/accets/svg/name_hero_desktop.svg";
import name_mobile from "@/accets/svg/name_hero_mobile.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_videoWrapper">
        <Video
          src={myVideo}
          autoplay
          muted
          loop
          playsInLine
          controls={false}
          preload="auto"
          className={"hero_video"}
        />
      </div>

      <div className="hero_titleWrap">
        <ImgSwitcher
          logo_desktop={name_desktop}
          logo_mobile={name_mobile}
        />
        <h1 className="hero_title">
          Індивідуальний дизайн штор для вашого дому
        </h1>
      </div>
    </section>
  );
};
