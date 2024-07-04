import FunFact from "@/components/fun-fact/FunFact";
import {
  MemojiAbout,
  MemojiAsset1,
  Rectangle2,
  Rectangle3,
} from "@/public/assets";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="relative overflow-hidden max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 px-10 py-3 mt-12">
      <Image
        className="absolute md:right-0 -right-7 w-[50px] top-18"
        src={Rectangle2}
        alt=""
      />

      <Image
        className="absolute md:left-0 -left-7 w-[50px] top-[300px]"
        src={Rectangle3}
        alt=""
      />
      <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold">
        <span className="text-[#C778DD]">/</span>about-me
      </h3>
      <p className="mt-4 mb-6">Who am i?</p>

      <div className="flex md:flex-row flex-col justify-between gap-8 items-center w-full h-full">
        <div className="text-[#ABB2BF] lg:w-[520px] mt-9 xl:max-w-[700px]">
          <p className="typed">Hello, i’m Blossom!</p>
          <p className="mt-4">
            I’m a self-taught front-end developer based in Lagos, Nigeria. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.{" "}
          </p>
          <p className="mt-4">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>

        <Image
          src={MemojiAbout}
          className="lg:absolute right-28 w-[350px]"
          alt="About me"
        />
        <Image
          src={MemojiAsset1}
          className="lg:absolute md:block hidden right-20 top-[300px]"
          alt="About me"
        />
      </div>

      <div className="mt-20">
        <div className="flex justify-between items-center w-full h-full">
          <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold">
            <span className="text-[#C778DD]">#</span>skills
          </h3>
        </div>

        <div className="flex md:flex-row flex-col gap-4 mt-8">
          <div className="border border-[#ABB2BF] w-fit h-fit">
            <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
              Languages
            </h3>
            <div className="px-2 text-[#ABB2BF]">Typescript C# Javascript</div>
          </div>

          <div className="border border-[#ABB2BF] w-fit  h-fit">
            <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
              Database
            </h3>
            <div className="px-2 text-[#ABB2BF]">MySQLWorkbench Mongo</div>
          </div>
          <div className="border border-[#ABB2BF] w-fit  h-fit">
            <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
              Other
            </h3>
            <div className="px-2 text-[#ABB2BF]">
              HTML CSS EJS SCSS REST Node.js
            </div>
          </div>

          <div className="border border-[#ABB2BF] w-fit  h-fit">
            <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
              Tools
            </h3>
            <div className="px-2 text-[#ABB2BF]">VSCode Git Linux</div>
          </div>

          <div className="border border-[#ABB2BF] w-fit  h-fit">
            <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
              Frameworks
            </h3>
            <div className="px-2 text-[#ABB2BF]">React Next Express.js</div>
          </div>
        </div>
        <FunFact />
      </div>
    </div>
  );
};

export default AboutMe;
