import { Email, Github, Hamburger, LinkedIn, NameLogo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="relative">
      <div
        className={`flex justify-between items-center w-full h-full max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 px-10 xl:px-0 pt-5`}
      >
        <section className="flex flex-col items-center gap-3 top-0 md:left-3 xl:left-12 lg:left-8 hidden md:block md:absolute">
          <div className="h-[191px] w-[1px] bg-[#ABB2BF] mx-auto mb-2" />
          <div className="flex flex-col gap-3">
            <Image src={Github} alt="Github" className="w-full" />
            <Image src={LinkedIn} alt="LinkedIN" />
            <Image src={Email} alt="Email" />
          </div>
        </section>
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src={NameLogo} alt="Logo" width={20} height={20} />
          <h4 className="font-bold ">Blossom</h4>
        </Link>
        <section className="md:block hidden">
          <ul className="flex gap-5">
            <Link className="text-[#ABB2BF] focus:font-medium focus:text-white" href={"/"}>
              <span className="text-[#C778DD]">#</span>home
            </Link>
            <Link className="text-[#ABB2BF] focus:font-medium focus:text-white" href={"/projects"}>
              <span className="text-[#C778DD]">#</span>works
            </Link>
            <Link className="text-[#ABB2BF] focus:font-medium focus:text-white" href={"/about-me"}>
              <span className="text-[#C778DD]">#</span>about-me
            </Link>
            <Link className="text-[#ABB2BF] focus:font-medium focus:text-white" href={"/contacts"}>
              <span className="text-[#C778DD]">#</span>contacts
            </Link>
          </ul>
        </section>
       <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
