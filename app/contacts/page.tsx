import {
  Email,
  LinkedIn,
  MemojiAsset1,
  Rectangle2,
  Twitter,
} from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contacts = () => {
  return (
    <div className="relative overflow-hidden max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 px-10 py-3 mt-12 h-full">
      <Image
        className="absolute md:right-0 -right-7 w-[50px] top-24"
        src={Rectangle2}
        alt=""
      />
      <Image
        className="absolute md:left-0 -left-7 w-[50px] bottom-4"
        src={MemojiAsset1}
        alt=""
      />
      <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold">
        <span className="text-[#C778DD]">/</span>contacts
      </h3>
      <h4 className="mt-5">How to reach me</h4>
      <div className="flex md:flex-row flex-col justify-between mt-5 gap-5">
        <p className="text-[#ABB2BF] lg:max-w-[520px] xl:max-w-[700px]">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="border border-[#ABB2BF] p-4 flex flex-col gap-2 w-fit h-fit">
            <h4>Support me</h4>
            <h5 className="text-[#ABB2BF]">+234-816-238-529-7</h5>
          </div>
          <div className="border border-[#ABB2BF] p-4 flex flex-col gap-4 w-fit">
            <h4>Message me here</h4>
            <div className="flex gap-2">
              <Image src={Email} alt="" />
              <h5 className="text-[#ABB2BF]">chinanuchikezie515@gmail.com</h5>
            </div>
            <div className="flex gap-2">
              <Image src={LinkedIn} alt="" />
              <h5 className="text-[#ABB2BF]">blossom-chikezie</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold mt-12">
          <span className="text-[#C778DD]">#</span>all-media
        </h3>
        <div className="flex gap-8 mt-5 items-center">
          <Link className="flex gap-2" href={""}>
            <Image src={Twitter} alt="" />
            <h4>blosomtechsiast</h4>
          </Link>

          <Link className="flex gap-2" href={""}>
            <Image src={LinkedIn} alt="" />
            <h4>blossom-chikezie</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
