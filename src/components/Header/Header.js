"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { Button } from "../Button";
import { LangSwitcher } from "../LangSwitcher";
import { Navigate } from "../Navigate";
import { ImgSwitcher } from "../ImgSwitcher";

import logo_desktop from "@/accets/svg/logo_header_desktop.png";
import logo_mobile from "@/accets/svg/logo_header_mobile.png";
import menu_mobile from "@/accets/svg/header_mobile_menu.svg";
import phone_mobile from "@/accets/svg/header_mobile_phone.svg";
import close_mobile from "@/accets/svg/header_mobile_close.svg";

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={isHome ? "container header" : "container header header--color"}
    >
      <ImgSwitcher
        img_desktop={logo_desktop}
        img_mobile={logo_mobile}
        alt={"логотип"}
        
      />

      <div className={menuOpen ? "open header_wrapp" : "header_wrapp"}>
        <Navigate />
        <LangSwitcher />
      </div>
      <div className="mobileIcon_wrapp">
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          type="button"
        >
          <Image
            src={menu_mobile}
            alt={"menu icon"}
            width={44}
            height={44}
            className={menuOpen ? "menu_icon" : "close_icon"}
          />
          <Image
            src={close_mobile}
            alt={"close icon"}
            width={44}
            height={44}
            className={menuOpen ? "close_icon" : "menu_icon"}
          />
        </button>
        <Link className="phone_icon" type="button" href="#footer">
          <Image src={phone_mobile} alt={"phone icon"} width={24} height={24} />
        </Link>
      </div>
      <Button
        text={"Зв'язатися"}
        isErrow={false}
        path={"#footer"}
        type={"button"}
      />
    </header>
  );
};
