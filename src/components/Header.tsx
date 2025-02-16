import { AiOutlineFilePdf } from "react-icons/ai";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import DouglasResume from "@/assets/DouglasEduardo_Resume.pdf";
import useTracking from "@/utils/hooks/useTracking";

const Header = () => {
  const { createTrackHandler } = useTracking("Header");

  const handleResumeDownloadClick = createTrackHandler("Resume Button Click");
  const handleLinkedinClick = createTrackHandler("Linkedin Click");
  const handleGithubClick = createTrackHandler("Github Click");
  const handleWhatsappClick = createTrackHandler("Whatsapp Click");

  return (
    <div className="flex justify-center xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10">
      <div className="w-full flex items-center justify-between mt-8">
        <div className="flex items-center gap-x-4">
          <a
            href={DouglasResume}
            download={DouglasResume}
            onClick={handleResumeDownloadClick}
          >
            <button className="text-white rounded-full lg:w-fit hover:bg-[#242424] transition duration-500 ease-in-out font-gilmer-medium border-[1px] focus:outline-none flex items-center justify-center gap-x-1 border-white/50 py-2 px-4 text-sm sm:text-lg xl:text-xl 2xl:text-sm w-full">
              <AiOutlineFilePdf />
              <span>Download Resume</span>
            </button>
          </a>
        </div>

        <div className="flex flex-col w-1/3 items-center justify-center">
          <div className="divide-x divide-solid divide-white/50 grid grid-cols-3 justify-between w-full xl:w-1/2">
            <a
              href="https://linkedin.com/in/douglas-eduardo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
              onClick={handleLinkedinClick}
            >
              <SiLinkedin className="text-white" />
            </a>
            <a
              href="https://github.com/douglasedward"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
              onClick={handleGithubClick}
            >
              <SiGithub className="text-white" />
            </a>
            <a
              href="https://wa.me/5567992536106"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
              onClick={handleWhatsappClick}
            >
              <RiWhatsappFill className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
