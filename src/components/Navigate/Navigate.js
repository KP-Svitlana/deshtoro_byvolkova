"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/constants";

export const Navigate = ({className}) => {
  const pathname = usePathname();
  
  return (
    <nav className={className}>
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
  );
};
