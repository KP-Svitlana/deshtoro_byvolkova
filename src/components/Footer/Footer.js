import Form from "next/form";
import { Navigate } from "../Navigate";
import { SocMediaLinks } from "../SocMediaLinks";
import { LogoSwitcherImg } from "../LogoSwitcherImg";

import logo_desktop from "@/accets/svg/logo_header_desktop.png";
import logo_mobile from "@/accets/svg/logo_header_mobile.png";

export const Footer = () => {
  return (
    <footer className="footer container" id="footer">
      <div className="footer_wrap">
        <h2 className="footer_title">
          Оформимо ваш інтер’єр із бездоганним стилем
        </h2>
        <h2 className="footer_title">+38 067 939 06 77</h2>
      </div>
      <div className="footer_wrap">
        <p className="footer_text">
          Або ви можете залишити свій номер телефону, і наші фахівці зв’яжуться
          з вами, щоб відповісти на всі ваші запитання та допомогти створити
          унікальне текстильне оформлення вашого інтер’єру.
        </p>
        <Form className="footer_form">
          <label className="form_label">Номер телефону</label>
          <input
            className="form_input"
            id="tel"
            type="tel"
            name="tel"
            placeholder="Введіть номер"
          ></input>
          <input className="form_btn" type="submit" value="Надіслати" />
        </Form>
      </div>
      <div className="footer_navWrap">
        <LogoSwitcherImg
          logo_desktop={logo_desktop}
          logo_mobile={logo_mobile}
          className={"footer_logo"}
        />
        <Navigate />
        <SocMediaLinks />
      </div>
    </footer>
  );
};
