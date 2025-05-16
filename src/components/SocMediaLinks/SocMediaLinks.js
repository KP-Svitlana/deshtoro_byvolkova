import Link from "next/link";
import { socLinks } from "@/constants";
import Image from "next/image";

export const SocMediaLinks = () => {
  return (
    <ul className="socMedia_list">
      {socLinks.map((link) => {
        return (
          <li key={link.label}>
            <Link href={link.href} key={link.label}>
              <Image src={link.src} alt={link.label} height={44} width={44} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
