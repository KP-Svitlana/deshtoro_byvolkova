import Image from "next/image";

import { aboutUsData } from "@/constants";


export default function AboutUs() {
  return (
   
      <section className="container aboutUs_section">
        <ul className="aboutUs_list">
          {aboutUsData.map((item) => {
            return (
              <li key={item.label} className="aboutUs_item">
                <Image src={item.src} alt={item.label} className="aboutUs_img"/>
                <p className="aboutUs_text">{item.text}</p>
              </li>
            );
          })}
        </ul>
        
      </section>
   
  );
}
