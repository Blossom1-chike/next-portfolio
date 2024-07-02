import { Dots1 } from "@/public/assets";
import Image from "next/image";
import React from "react";

const ProjectSection = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center w-full h-full max-w-[1350px] text-white mx-auto lg:px-16 md:px-16 xl:px-0 py-3">
        <Image src={Dots1} alt="" className="absolute left-0 top-20 w-[25px]" />
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <h3>
              <span className="text-[#C778DD]">#</span>projects
            </h3>
            <div className="h-[1px] w-[311px] bg-[#C778DD]" />
          </div>
          <div>
            <h3>View all ~~&gt;</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
