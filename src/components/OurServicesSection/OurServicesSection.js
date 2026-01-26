import Image from "next/image";

import { ourServicesData } from "@/constants";
import { Slider } from "../Slider";

export const OurServicesSection = () => {
  return (
    <section className="container section">
      <h2 className="section_title">наші послуги</h2>
      <div className="ourServicesSection_section">
        <ul className="ourServicesSection_list">
          {ourServicesData.map((item) => {
            return (
              <li key={item.label} className="ourServicesSection_item">
                <Image
                  src={item.src}
                  alt={item.label}
                  className="ourServices_img"
                />
                <div className="ourServices_wrap">
                  <h3 className="ourServices_label">{item.label}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Slider data={ourServicesData} />
      
    </section>
  );
};
