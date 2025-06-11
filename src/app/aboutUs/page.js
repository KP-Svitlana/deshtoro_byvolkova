import Image from "next/image";

import { aboutUsData } from "@/constants";


export default function AboutUs() {
  return (
    <main>
      <section className="container aboutUs_section">
        <ul>
          {aboutUsData.map((item) => {
            return (
              <li key={item.label} >
                <Image src={item.src} alt={item.label} className="aboutUs_img"/>
                <p className="aboutUs_text">{item.text}</p>
              </li>
            );
          })}
        </ul>
        
      </section>
    </main>
  );
}
