import { Dots1, MemojiAsset1, MemojiAsset2, SkillsBanner } from "@/public/assets";
import Image from "next/image";
import React from "react";

const SkillsSection = () => {
  return (
    <div className="relative max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 px-10 py-3 mt-12">
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex items-center gap-2">
          <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold">
            <span className="text-[#C778DD]">#</span>skills
          </h3>
          <div className="h-[1px] w-[211px] bg-[#C778DD]" />
        </div>
      </div>
      <div className="md:flex justify-between mt-5">
        <div className="md:w-full hidden md:block">
          <Image src={SkillsBanner} className="w-full lg:w-[600px]" alt="" />
        </div>
        <div className="grid md:grid-cols-3 gap-3 mt-5 w-full">
          <div className="border border-[#ABB2BF] md:w-[150px] lg:max-w-[200px] w-full xl:w-full h-fit">
            <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
              Languages
            </h3>
            <div className="px-2 text-[#ABB2BF]">Typescript C# Javascript</div>
          </div>
          <div className="grid grid-flow-row gap-3 lg:max-w-[200px] w-full xl:w-full md:w-[150px]">
            <div className="border border-[#ABB2BF] w-full h-fit">
              <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
                Database
              </h3>
              <div className="px-2 text-[#ABB2BF]">MySQLWorkbench Mongo</div>
            </div>
            <div className="border border-[#ABB2BF] w-full h-fit">
              <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
                Other
              </h3>
              <div className="px-2 text-[#ABB2BF]">
                HTML CSS EJS SCSS REST Node.js
              </div>
            </div>
          </div>
          <div className="w-[200px] grid grid-flow-row gap-3 lg:max-w-[200px] w-full xl:w-full md:w-[150px]">
            <div className="border border-[#ABB2BF] w-full h-fit">
              <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
                Tools
              </h3>
              <div className="px-2 text-[#ABB2BF]">VSCode Git Linux</div>
            </div>

            <div className="border border-[#ABB2BF] w-full h-fit">
              <h3 className="font-semibold border-b border-b-[#ABB2BF] px-2">
                Frameworks
              </h3>
              <div className="px-2 text-[#ABB2BF]">React Next Express.js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
