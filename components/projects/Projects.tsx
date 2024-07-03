import { Dots1 } from "@/public/assets";
import { projects } from "@/utils/data/projects";
import Image from "next/image";
import React from "react";

const ProjectSection = () => {
  return (
    <div className="relative max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 py-3 mt-4">
      <div className="flex justify-between items-center w-full h-full">
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
      <div className="flex gap-4 mt-5 ">
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

export default ProjectSection;
