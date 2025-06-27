import Link from "next/link";
import Image from "next/image";
import arrowSvg from "@/accets/svg/arrow.png";
import arrowSvgBig from "@/accets/svg/arrowUp_big.svg";

export const Button = ({ text, isErrow, type, path = "/", isErrowBig }) => {
  return (
    <>
      {type ? (
        <Link type={type} className="button" href={path}>
          {text}
          {isErrow && <Image src={arrowSvg} alt="Arrow" /> }
        </Link>
      ) : (
        <Link href={path} className="button_link">
          {text}
          {isErrow ? ( isErrowBig ? (<Image src={arrowSvgBig} alt="Big arrow" />) : (<Image src={arrowSvg} alt="Small arrow" />)) : null} 
        </Link>
      )}
    </>
  );
};
