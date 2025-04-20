import Image from "next/image";
import about1 from "../../accets/img/about1_x3_desktop.jpg";
import about2 from "../../accets/img/about2_x3_desktop.jpg";

export const About = () => {
  return (
    <section className="section"> 
      <h1 className="section_title">про нас</h1>
      <h2>Стиль</h2>
      <h2>Якість</h2>
      <h2>Преміальність</h2>
      <Image
        src={about1}
        alt="штора"
        width={410}
        height={528}
      />
      <Image
        src={about2}
        alt="тканина"
        width={410}
        height={312}
      />
      <p>
        Де ШТОРИ — це студія штор, де поєднуються стиль, якість та
        індивідуальний підхід. Ми створюємо штори, які ідеально доповнюють ваш
        інтер’єр та підкреслюють ваш смак. Від елегантної класики до сучасного
        мінімалізму — ми допоможемо обрати найкраще рішення саме для вас.
      </p>
    </section>
  );
};
