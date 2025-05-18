import Image from "next/image";

export const LogoSwitcherImg = ({ logo_desktop, logo_mobile , className }) => {
  return (
    <div className={className}>
      <Image src={logo_desktop} alt="логотип" className={"desktop_img"} />
      <Image src={logo_mobile} alt="логотип" className={"mobile_img"} />
    </div>
  );
};
