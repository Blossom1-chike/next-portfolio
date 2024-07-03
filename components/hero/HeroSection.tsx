"use client";
import { Memoji, MemojiAsset1, MemojiAsset2 } from "@/public/assets";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const imageContainer = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const tl = gsap.timeline();

    mm.add("(min-width: 768px)", () => {
      tl.set(imageContainer.current, {
        display: "grid",
        delay: 2,
      });
      tl.fromTo(
        imageContainer.current,
        {
          ease: "elastic.out",
          duration: 1,
          x: 500,
        },
        {
          ease: "bounce.out",
          duration: 1,
          x: 0,
        }
      );
    });
  });

  return (
    <div className="flex md:flex-row flex-col justify-between items-center w-full h-full max-w-[1350px] overflow-hidden text-white mx-auto lg:px-24 md:px-16 px-10 xl:px-0 py-3">
      <div className="grid grid-flow-row gap-5 w-full lg:max-w-[600px]">
        <div>
          <h1 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold leading-[42px] text-wrap typed">
            Blossom is a{" "}
            <span className="text-[#C778DD] typed">web designer</span> and{" "}
          </h1>
          <h1 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold leading-[42px] text-wrap typed">
            
            <span className="text-[#C778DD] typed">front-end developer</span>
          </h1>
        </div>

        <h3>
          She crafts responsive websites where technologies meet creativity
        </h3>
        <button className="border border-[#C778DD] py-2 px-4 w-fit">
          Contact Me !!
        </button>
      </div>
      <div className="relative">
        <Image
          className="absolute right-0 bottom-4 w-[60px]"
          src={MemojiAsset1}
          alt=""
        />
        {/* <Image className="absolute left-0" src={MemojiAsset2} alt="" /> */}
        <Image ref={imageContainer} src={Memoji} className="w-full" alt="memomji" />
      </div>
    </div>
  );
};

export default HeroSection;
