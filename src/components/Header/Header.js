"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";

import logo_desktop from "@/accets/svg/logo_header_desktop.png";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container">
      <Image src={logo_desktop} alt="logo" />
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.label}>
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
    </header>
  );
};
