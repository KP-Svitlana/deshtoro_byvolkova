import Link from "next/link";
import Image from "next/image";
import errowSvg from "@/accets/svg/arrow.png";

export const Button = ({ text, isErrow, type, path = "/"}) => {
  return (
    <>
      {type ? (
        <button type={type} className= "button">
          {text}
          {isErrow && <Image src={errowSvg} alt="Errow" />}
        </button>
      ) : (
        <Link href={path} className="button_link">
          {text}
          {isErrow && <Image src={errowSvg} alt="Errow" />}
        </Link>
      )}
    </>
  );
};
