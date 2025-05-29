"use client";

import { usePathname } from "next/navigation";
import { Button } from "../Button";
import { LangSwitcher } from "../LangSwitcher";
import { Navigate } from "../Navigate";
import { LogoSwitcherImg } from "../LogoSwitcherImg";

import logo_desktop from "@/accets/svg/logo_header_desktop.png";
import logo_mobile from "@/accets/svg/logo_header_mobile.png";

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={isHome ? "container header" : "container header header--color"}>
      <LogoSwitcherImg logo_desktop={logo_desktop} logo_mobile={logo_mobile} />
      <div className="header_wrapp">
        <Navigate />
        <LangSwitcher />
      </div>
      <Button text={"Зв'язатися"} isErrow={false} type={"button"} />
    </header>
  );
};
