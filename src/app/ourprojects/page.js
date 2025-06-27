import { ourProjectsData } from "@/constants";
import { Button } from "@/components/Button";

export default function Ourprojects() {
  return (
    <section className="container ourProjects_section">
      <p className="ourProjects_text">
        Ми віримо, що кожен інтер’єр — це унікальна історія, а правильно
        підібраний текстиль грає ключову роль у створенні гармонійного простору.
      </p>
      <ul className="ourProjects_list">
        {ourProjectsData.map((item) => {
          return (
            <li key={item.label} className="ourProjects_item">
              <Button text={item.label} isErrow={true} isErrowBig={true} path={item.href} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
