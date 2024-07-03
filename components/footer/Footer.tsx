import { Github, LinkedIn, NameLogo, Twitter } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full h-full max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 py-5 border-t border-b-[#ABB2BF] mt-12">
      <div className="grid grid-flow-row gap-2">
        <section>
          <div className="flex gap-3">
            <span className="flex gap-2 items-centerfont-bold">
              <Image src={NameLogo} alt="Logo" />
              <h4 className="font-medium">Blossom</h4>
            </span>
            <h5 className="text-[#ABB2BF]">chinanuchikezie515@gmail.com</h5>
          </div>
        </section>
        <h4>Web designer and front-end developer</h4>
      </div>
      <div className="grid grid-flow-row gap-2">
        <h3>Media</h3>
        <div className="flex gap-3">
          <Image src={Github} alt="Logo" />
          <Image src={LinkedIn} alt="Logo" />
          <Image src={Twitter} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
