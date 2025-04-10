import { FaDocker, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiNestjs,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiPassport,
  SiShadcnui,
  SiReacthookform,
  SiZod,
  SiAwsamplify,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiAmazonec2,
  SiAmazonapigateway,
  SiAmazonrds,
  SiAmazons3,
  SiAmazoncognito,
} from "react-icons/si";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { TbBrandFramerMotion } from "react-icons/tb";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10 lg:my-36 my-16 space-y-16">
      <h1 className="text-white/80 font-gilmer-outlined lg:mb-10 mb-5 text-[3.5rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default">
        {t("featured_project")}
      </h1>

      <div className="container lg:space-x-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start">
        <div className="text-white space-y-2 sm:space-y-3 lg:space-y-4 w-fit">
          <h1 className="hidden-text font-gilmer-bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
            <div className="flex items-center m-0 lg:h-[52px] 2xl:h-[60px]">
              <p>RENTify</p>
            </div>
          </h1>
          <p className="font-normal cursor-default font-gilmer-regular text-white/90 vvs:text-base sm:text-xl xl:text-2xl text-sm">
            {t("rentify_description")}
          </p>
          <div className="flex justify-start space-x-3 items-center">
            <SiTypescript className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiNextdotjs className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiTailwindcss className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiRedux className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiShadcnui className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <TbBrandFramerMotion className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiReacthookform className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiZod className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiAwsamplify className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
          </div>
          <div className="flex justify-start space-x-3 items-center">
            <SiExpress className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <FaDocker className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiPrisma className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiPostgresql className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiAmazoncognito className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiAmazonec2 className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiAmazonapigateway className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiAmazonrds className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
            <SiAmazons3 className="lg:h-8 lg:w-8 sm:w-7 sm:h-7 h-5 w-5 transition duration-200 ease-in-out text-white/50 hover:text-white" />
          </div>
          <div className="flex justify-start space-x-6 items-center">
            <a
              href="https://github.com/douglasedward/real-estate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200 ease-in-out text-white/90 hover:text-white" />
            </a>
            <a
              href="https://main.d16d34rcv67zwt.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoArrowRight className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
            </a>
          </div>
        </div>

        <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full">
          <img
            src="https://dte4lj9t9uodb.cloudfront.net/rentify_preview.jpg"
            alt="spectrum project image"
            className="w-full object-cover object-left h-full"
          />
        </div>
      </div>

      <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start">
        <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full">
          <img
            src="https://dte4lj9t9uodb.cloudfront.net/spectrum.webp"
            alt="spectrum project image"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="text-white space-y-2 sm:space-y-3 lg:space-y-4 w-fit">
          <h1 className="hidden-text font-gilmer-bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
            <div className="flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px]">
              <p>Spectrum</p>
            </div>
          </h1>
          <p className="font-normal cursor-default font-gilmer-regular text-white/90 vvs:text-base sm:text-xl xl:text-2xl text-sm lg:text-right">
            {t("spectrum_description")}
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
