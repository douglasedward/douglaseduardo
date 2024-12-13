import { FaDocker, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiPassport,
} from "react-icons/si";
import { GoArrowRight } from "react-icons/go";
import spectrum from "@/assets/img/Spectrum.webp";

const Project = () => {
  return (
    <div className="max-w-7xl mx-auto lg:my-24 my-12">
      <h1 className="text-white/80 font-gilmer-outlined lg:mb-10 mb-5 sm:text-[5.2rem] md:text-[6.4rem] text-[3.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default">
        Featured Project
      </h1>

      <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start">
        <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full">
          <img
            src={spectrum}
            alt="spectrum project image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
          <h1 className="hidden-text font-bold font-gilmer-bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
            <div className="flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px]">
              <p>Spectrum</p>
            </div>
          </h1>
          <p className="font-normal cursor-default font-Gilmer text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
            A platform to create your portfolio and showcase in job
            opportunities.
          </p>
          <div className="flex justify-start space-x-3 items-center lg:justify-end">
            <SiTypescript className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiNestjs className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <FaDocker className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiNextdotjs className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiTailwindcss className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiPassport className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiMongodb className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiGraphql className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
          </div>
          <div className="flex justify-start space-x-6 items-center lg:justify-end">
            <a
              href="https://github.com/DouglasKyrius/spectrum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200 ease-in-out text-white/90 hover:text-white" />
            </a>
            <a
              href="https://github.com/DouglasKyrius/spectrum-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200 ease-in-out text-white/90 hover:text-white" />
            </a>
            <a
              href="https://spectrum-fe.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoArrowRight className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
