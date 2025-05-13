"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../Button";
import { LangSwitcher } from "../LangSwitcher";
import { Navigate } from "../Navigate";

import logo_desktop from "@/accets/svg/logo_header_desktop.png";

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={isHome ? "container header--home" : "container header"}>
      <Image src={logo_desktop} alt="logo" />
      <Navigate />
      <div className="header_wrapp">
        <LangSwitcher />
        <Button text={"Зв'язатися"} isErrow={false} type={"button"} />
      </div>
    </header>
  );
};
