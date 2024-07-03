"use client";
import {
  Close,
  Email,
  Github,
  Hamburger,
  LinkedIn,
  NameLogo,
} from "@/public/assets";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const MobileNavbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [parentRef] = useAutoAnimate();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <Image src={Hamburger} alt="Hamburger" />
      </button>
      {showMenu && (
        <div
          ref={parentRef}
          className=" w-full left-0 bg-[#282C33] z-50 fixed text-white top-0 p-6"
        >
          <div className="flex justify-between items-center">
            <Link href={"/"} className="flex gap-2 items-center">
              <Image src={NameLogo} alt="Logo" width={20} height={20} />
              <h4 className="font-bold">Blossom</h4>
            </Link>
            <Image
              onClick={() => setShowMenu(false)}
              className="cursor-pointer"
              src={Close}
              alt="Logo"
              width={20}
              height={20}
            />
          </div>

          <ul className="grid gap-6 my-5">
            <Link
              className="text-[#ABB2BF] focus:font-medium text-[32px] focus:text-white"
              href={"/"}
            >
              <span className="text-[#C778DD]">#</span>home
            </Link>
            <Link
              className="text-[#ABB2BF] focus:font-medium text-[32px] focus:text-white"
              href={"/projects"}
            >
              <span className="text-[#C778DD]">#</span>works
            </Link>
            <Link
              className="text-[#ABB2BF] focus:font-medium text-[32px] focus:text-white"
              href={"/about-me"}
            >
              <span className="text-[#C778DD]">#</span>about-me
            </Link>
            <Link
              className="text-[#ABB2BF] focus:font-medium text-[32px] focus:text-white"
              href={"/contacts"}
            >
              <span className="text-[#C778DD]">#</span>contacts
            </Link>
          </ul>

          <div className="flex justify-center gap-5">
            <Image className="w-8 h-8" src={Github} alt="Github" />
            <Image className="w-8 h-8" src={LinkedIn} alt="LinkedIN" />
            <Image className="w-8 h-8" src={Email} alt="Email" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
