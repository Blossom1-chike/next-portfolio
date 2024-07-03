import { MemojiAbout, MemojiAsset1, Rectangle2 } from "@/public/assets";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="relative max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 py-3 mt-12">
      <Image
        className="absolute left-0 w-[50px] top-24 rotate-180 lg:hidden"
        src={Rectangle2}
        alt=""
      />
      <div className="flex items-center gap-2">
        <h3>
          <span className="text-[#C778DD]">#</span>about-me
        </h3>
        <div className="h-[1px] w-[251px] bg-[#C778DD]" />
      </div>
      <div className="flex justify-between gap-8 items-center w-full h-full mt-3">
        <div className="text-[#ABB2BF] lg:max-w-[520px] xl:max-w-[700px]">
          <p>Hello, i’m Blossom!</p>
          <p className="mt-6">
            I’m a self-taught front-end developer based in Lagos, Nigeria. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.{" "}
          </p>
          <p className="mt-6">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <Image src={MemojiAbout} className="w-[290px]" alt="About me" />
      </div>
      <Image
        className="absolute right-0 w-[50px] bottom-24"
        src={MemojiAsset1}
        alt=""
      />
    </div>
  );
};

export default AboutSection;
