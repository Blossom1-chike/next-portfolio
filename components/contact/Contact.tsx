import { Email, LinkedIn, Resume } from "@/public/assets";
import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <div className="relative max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 px-10 py-3 mt-12">
      <div className="flex items-center gap-2">
        <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold">
          <span className="text-[#C778DD]">#</span>contacts
        </h3>
        <div className="h-[1px] w-[251px] bg-[#C778DD]" />
      </div>
      <div className="flex md:flex-row flex-col justify-between mt-5">
        <p className="text-[#ABB2BF] lg:max-w-[520px] xl:max-w-[700px]">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="border border-[#ABB2BF] p-4 flex flex-col gap-4 w-fit">
          <h4>Message me here</h4>
          <div className="flex gap-2">
            <Image src={Email} width={20} height={20} alt="" />
            <h5 className="text-[#ABB2BF] w-full">chinanuchikezie515@gmail.com</h5>
          </div>
          <div className="flex gap-2">
            <Image src={LinkedIn} alt="" />
            <h5 className="text-[#ABB2BF]">blossom-chikezie</h5>
          </div>
          <div className="flex gap-2">
            <Image src={Resume} width={20} height={20} alt="" />
            <a
              href="/Blossom.pdf"
              download={"Blossom Chikezie's Resume"}
              className="text-[#ABB2BF]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
