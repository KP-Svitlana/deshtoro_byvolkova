import Image from "next/image";

import { ourProjectsData } from "@/constants";
import { Button } from "../Button";

export const OurProjectsSection = () => {
  return (
    <section className="container ourProjectsSection_section">
      <p className="ourProjectsSection_text">Наші проєкти</p>
      <ul className="ourProjectsSection_list">
        {ourProjectsData.map((item) => {
          return (
            <li key={item.label} className="ourProjectsSection_item">
              <Image src={item.src} alt={item.label} />
              <Button type="Button" text="Дивитись" path={item.href} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
