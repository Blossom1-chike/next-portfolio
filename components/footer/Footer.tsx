import { Github, LinkedIn, NameLogo, Twitter } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between md:items-center w-full h-full max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 px-10 py-5 border-t border-b-[#ABB2BF] mt-12">
      <div className="grid grid-flow-row gap-2">
        <section>
          <div className="flex md:flex-row flex-col  gap-3">
            <span className="flex gap-2 items-center font-bold">
              <Image src={NameLogo} alt="Logo" />
              <h4 className="font-medium">Blossom</h4>
            </span>
            <h5 className="text-[#ABB2BF]">chinanuchikezie515@gmail.com</h5>
          </div>
        </section>
        <h4>Web designer and front-end developer</h4>
      </div>
      <div className="grid grid-flow-row gap-2">
        <h3 className="text-center md:text-left">Media</h3>
        <div className="flex md:gap-3 mx-auto md:mx-0 gap-5">
          <Image src={Github} alt="Logo" />
          <Image src={LinkedIn} alt="Logo" />
          <Image src={Twitter} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
