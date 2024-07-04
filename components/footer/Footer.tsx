import { Github, LinkedIn, NameLogo, Twitter } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-8 md:gap-0 justify-between md:items-center w-full h-full max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 px-10 py-5 border-t border-b-[#ABB2BF] mt-12">
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
        <div className="flex md:gap-5 mx-auto md:mx-0 gap-5">
          <Link href={"https://github.com/Blossom1-chike"}>
            <Image
              src={Github}
              alt="Github"
              width={20}
              height={20}
              className="w-full"
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/blossom-chikezie/"}>
            <Image src={LinkedIn} width={20} height={20} alt="LinkedIn" />
          </Link>
          <Link href={"https://x.com/blosomtechsiast"}>
            <Image src={Twitter} width={20} height={20} alt="Email" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
