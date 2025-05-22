import Video from "next-video";

import { LogoSwitcherImg } from "../LogoSwitcherImg";

import myVideo from "../../../videos/get-started.mp4.json";


import name_desktop from "@/accets/svg/name_hero_desktop.svg";
import name_mobile from "@/accets/svg/name_hero_mobile.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <Video
        src={myVideo}
        autoplay
        muted
        loop
        playsInLine
        controls={false}
        className={"hero_video"}
      />
      <div className="hero_titleWrap">
        <LogoSwitcherImg logo_desktop={name_desktop} logo_mobile={name_mobile} />
      <h1 className="hero_title">Індивідуальний дизайн штор для вашого дому</h1>
      </div>
    
    </section>
  );
};
