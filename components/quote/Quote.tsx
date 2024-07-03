import { Quote, Rectangle1 } from "@/public/assets";
import Image from "next/image";
import React from "react";

const QuoteSection = () => {
  return (
    <div className="flex flex-col relative justify-between items-center w-full h-full max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 py-3">
        <Image className="absolute right-0 w-[50px] top-10" src={Rectangle1} alt="" />
      <div>
        <fieldset className="w-fit border border-[#ABB2BF] p-5 relative">
          <legend>
            <Image className="w-[25px]" src={Quote} alt="" />
          </legend>
          <legend className="absolute bottom-0 right-0 px-2 transform translate-y-[60%]">
            <Image className="w-[25px]" src={Quote} alt="" />
          </legend>
          <h4>With great power comes great electricity bill</h4>
        </fieldset>
        <fieldset className="w-fit ml-auto border text-right border-[#ABB2BF] px-4 py-2">
          <h4>- Dr. Who</h4>
        </fieldset>
      </div>
    </div>
  );
};

export default QuoteSection;
