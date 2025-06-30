import Image from "next/image";

export const ImgSwitcher = ({ img_desktop, img_mobile , className, alt }) => {
  return (
    <div className={className}>
      <Image src={img_desktop} alt={alt} className={"desktop_img"} />
      <Image src={img_mobile} alt={alt} className={"mobile_img"} />
    </div>
  );
};
