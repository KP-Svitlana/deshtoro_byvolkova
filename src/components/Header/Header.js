"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";
import { Button } from "../Button";
import { LangSwitcher } from "../LangSwitcher";

import logo_desktop from "@/accets/svg/logo_header_desktop.png";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container header">
      <Image src={logo_desktop} alt="logo" />
      <nav>
        <ul className="nav_list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.label} className="nav_item">
                <Link
                  className={isActive ? "navLink--active" : "navLink"}
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="header_wrapp">
      <LangSwitcher/>
      <Button text={"Зв'язатися"} isErrow={false} type={"button"}/>
      </div>
      
    </header>
  );
};
