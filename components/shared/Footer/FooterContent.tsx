import Image from "next/image";
import React from "react";

const FooterContent = ({ icon, text }: any) => {
  return (
    <div className="flex flex-row gap-2">
      {icon && (
        <Image
          src={`/assets/${icon}`}
          alt="footer-icon"
          width={15}
          height={15}
          className="w-[15px] h-[15px]"
        />
      )}
      <p className="text-white text-sm font-light">{text}</p>
    </div>
  );
};

export default FooterContent;
