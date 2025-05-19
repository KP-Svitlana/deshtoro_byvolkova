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
    <header className={isHome ? "container header--home" : "container header"}>
      <LogoSwitcherImg logo_desktop={logo_desktop} logo_mobile={logo_mobile} />
      <Navigate />
      <div className="header_wrapp">
        <LangSwitcher />
        <Button text={"Зв'язатися"} isErrow={false} type={"button"} />
      </div>
    </header>
  );
};
