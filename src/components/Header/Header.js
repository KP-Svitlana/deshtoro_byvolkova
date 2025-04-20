"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/constants";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container">
      <h1>Header</h1>
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
