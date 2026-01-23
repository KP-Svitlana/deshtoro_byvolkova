import Image from "next/image";

import { ourServicesData } from "@/constants";


export const OurServicesSection = () => {
  return (
    <section className="container section ourServicesSection_section">
      <h2 className="section_title">наші послуги</h2>
      <ul className="ourServicesSection_list">
        {ourServicesData.map((item) => {
          return (
            <li key={item.label} className="ourServicesSection_item">
              <Image src={item.src} alt={item.label} className="ourServices_img"/>
              <div className="ourServices_wrap"><h3 className="ourServices_label">{item.label}</h3></div>
              
            </li>
          );
        })}
      </ul>
    </section>
  );
};
