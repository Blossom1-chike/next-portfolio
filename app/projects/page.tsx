"use client";
import { Rectangle2, Rectangle3 } from "@/public/assets";
import { projects } from "@/utils/data/projects";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="relative overflow-hidden max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 px-10 py-3 mt-5 md:mt-12">
      <Image
        className="absolute md:right-0 -right-7 w-[50px] top-18"
        src={Rectangle2}
        alt=""
      />

      <Image
        className="absolute md:left-0 -left-7 w-[50px] top-[240px]"
        src={Rectangle3}
        alt=""
      />
      <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold">
        <span className="text-[#C778DD]">/</span>projects
      </h3>
      <p className="mt-4">List of my projects</p>
      <div className="flex md:flex-row flex-col md:gap-4 gap-8 mt-5 ">
        {projects.map((project, index) => (
          <div className="border border-[#ABB2BF] w-full h-fit" key={index}>
            <Image
              className="border-b border-b-[#ABB2BF] w-full"
              src={project.image}
              alt="Image"
            />
            <p className="border-b border-b-[#ABB2BF] p-2 text-[#ABB2BF]">
              {project.stack}
            </p>
            <section className="px-2 py-4 flex flex-col gap-2">
              <h4>{project.name}</h4>
              <h5 className="text-[#ABB2BF]">{project.description}</h5>
              <div>
                <button className="border border-[#C778DD] py-1 px-4">
                  Live &lt;~&gt;
                </button>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
