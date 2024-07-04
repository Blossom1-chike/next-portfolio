"use client";
import { Email, Github, Hamburger, LinkedIn, NameLogo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname =  usePathname();
  const isActive = (path: string) => path === pathname;
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "works",
      path: "/projects",
    },
    {
      name: "about-me",
      path: "/about-me",
    },
    {
      name: "contacts",
      path: "/contacts",
    },
  ];
  return (
    <div className="relative sticky inset-0 z-50 bg-[#282C33]">
      <div
        className={`flex justify-between items-center w-full h-full max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 px-10 xl:px-0 shadow-lg py-5`}
      >
        <section className="flex flex-col items-center gap-3 top-0 md:left-3 xl:left-12 lg:left-8 hidden md:block md:fixed">
          <div className="h-[191px] w-[1px] bg-[#ABB2BF] mx-auto mb-2" />
          <div className="flex flex-col gap-3">
            <Image
              src={Github}
              alt="Github"
              width={20}
              height={20}
              className="w-full"
            />
            <Image src={LinkedIn} width={20} height={20} alt="LinkedIN" />
            <Image src={Email} width={20} height={20} alt="Email" />
          </div>
        </section>
        <Link href={"/"} className="flex gap-2 items-center">
          <Image src={NameLogo} alt="Logo" width={20} height={20} />
          <h4 className="font-bold ">Blossom</h4>
        </Link>
        <section className="md:block hidden">
          <ul className="flex gap-5">
            {links.map((link, index) => (
              <Link
                key={index}
                className={isActive(link.path) ? "font-medium text-white" : "text-[#ABB2BF]"}
                href={link.path}
              >
                <span className="text-[#C778DD]">#</span>
                {link.name}
              </Link>
            ))}
          </ul>
        </section>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
