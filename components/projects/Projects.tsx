import { Dots1 } from "@/public/assets";
import { projects } from "@/utils/data/projects";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the container
        threshold: 0.3, // Adjust this value to determine when the callback should be triggered
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
    
  });
  
  return (
    <div className="relative max-w-[1350px] text-white mx-auto lg:px-24 md:px-16 xl:px-0 px-10 py-3 mt-4">
      <div className="flex justify-between items-center w-full h-full">
        <Image src={Dots1} alt="" className="absolute left-0 top-20 w-[25px]" />
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <h3 className="lg:text-[32px] md:text-[24px] text-2xl font-semibold">
              <span className="text-[#C778DD]">#</span>projects
            </h3>
            <div className="h-[1px] md:w-[311px] w-[200px] bg-[#C778DD]" />
          </div>
          <div className="md:block hidden">
            <h3>View all ~~&gt;</h3>
          </div>
        </div>
      </div>
      <div ref={divRef} className={`flex md:flex-row flex-col md:gap-4 gap-8 mt-5 ${isVisible ? "scrolled" : ""} js-scroll fade-in-bottom`}>
        {projects.map((project, index) => (
          <div className="border border-[#ABB2BF] w-full h-fit" key={index}>
            <Image
              className="border-b border-b-[#ABB2BF] w-full"
              src={project.image}
              alt="Image"
              width={200}
              height={200}
            />
            <p className="border-b border-b-[#ABB2BF] p-2 text-[#ABB2BF]">
              {project.stack}
            </p>
            <section className="px-2 py-4 flex flex-col gap-2">
              <h4 className="text-xl">{project.name}</h4>
              <h5 className="text-[#ABB2BF]">{project.description}</h5>
              <div>
                <Link href={project.live_url} className="border border-[#C778DD] py-1 px-4  hover:bg-[#C778DD] hover:text-white hover:bg-opacity-40">
                  Live &lt;~&gt;
                </Link>
              </div>
            </section>
          </div>
        ))}
      </div>
      <div className="md:hidden mt-4 text-right">
        <h3>View all ~~&gt;</h3>
      </div>
    </div>
  );
};

export default ProjectSection;
