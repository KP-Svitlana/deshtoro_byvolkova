import Image from "next/image";
import { Button } from "../Button";

import about1 from "@/accets/img/about1_x3_desktop.jpg";
import about2 from "@/accets/img/about2_x3_desktop.jpg";

export const About = () => {
  return (
    <section className="section container section_about">
      <h2 className="section_title">про нас</h2>
      <ul className="about_list">
        <li className="about_item" key={"style"}>
          <p>Стиль</p>
        </li>
        <li className="about_item" key={"quality"}>
          <p>Якість</p>
        </li>
        <li className="about_item" key={"premium"}>
          <p>Преміальність</p>
        </li>
      </ul>
      <ul className="about_photolist">
        <li className="photolist_item" key={"1"}>
          <Image
            src={about1}
            alt="штора"
            height={528}
            
            className="photolist_img"
            priority={true}
          />
        </li>
        <li className="photolist_item" key={"2"}>
          <Image
            src={about2}
            alt="тканина"
            height={312}
            
            className="photolist_img"
          />
          <div className="about_textwrapp">
            <p className="about_text">
              Де ШТОРИ — це студія штор, де поєднуються стиль, якість та
              індивідуальний підхід. Ми створюємо штори, які ідеально доповнюють
              ваш інтер’єр та підкреслюють ваш смак. Від елегантної класики до
              сучасного мінімалізму — ми допоможемо обрати найкраще рішення саме
              для вас.
            </p>
            <Button text="Дізнатися більше" isErrow={true} path="aboutUs" />
          </div>
        </li>
      </ul>
    </section>
  );
};
