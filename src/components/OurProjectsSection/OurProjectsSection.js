import Image from "next/image";

import { ourProjectsData } from "@/constants";
import { Button } from "../Button";
import { ImgSwitcher } from "../ImgSwitcher";

export const OurProjectsSection = () => {
  return (
    <section className="container section ourProjectsSection_section">
      <h2 className="section_title">Наші проєкти</h2>
      <ul className="ourProjectsSection_list">
        {ourProjectsData.map((item) => {
          return (
            <li key={item.key} className="ourProjectsSection_item">
              <ImgSwitcher
                img_desktop={item.src}
                img_mobile={item.src_m}
                className={"ourProjectsSection_img"}
                alt={item.label}
              />
              <Button
                type="Button"
                text="Дивитись"
                path={item.href}
                className="ourProjectsSection_btn"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
