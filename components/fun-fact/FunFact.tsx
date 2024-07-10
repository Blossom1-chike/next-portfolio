import { facts } from "@/utils/data/fact";
import React from "react";

const FunFact = () => {
  return (
    <div className="mt-24 pb-12 relative">
      <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold">
        <span className="text-[#C778DD]">#</span>my-fun-facts
      </h3>
      <div className="flex justify-between mt-6">
        <div className="grid grid-cols-2 gap-3">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="border border-[#ABB2BF] p-2 text-[#ABB2BF] w-fit"
            >
              {fact}
            </div>
          ))}
        </div>
        {/* <div className="absolute top-0"> */}
          {/* <Image
            src={MemojiAsset1}
            className="lg:absolute md:block hidden right-44 top-0"
            alt="About me"
          />
           <Image
            src={MemojiAsset2}
            width={100}
            height={100}
            className="lg:absolute right-10 md:block hidden top-12 w-[100px]"
            alt="About me"
          /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default FunFact;
