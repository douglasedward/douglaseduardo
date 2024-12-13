import { AiOutlineFilePdf } from "react-icons/ai";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl flex items-center justify-between mt-8">
        <div className="flex items-center gap-x-4">
          <p className="">douglaskyrius@gmail.com</p>
          <button className="text-white rounded-full lg:w-fit hover:bg-[#242424] transition duration-500 ease-in-out font-gilmer-medium border-[1px] focus:outline-none flex items-center justify-center gap-x-1 border-white/50 py-2 px-4 text-lg xl:text-xl 2xl:text-sm w-full">
            <AiOutlineFilePdf />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="flex flex-col w-1/3 items-end justify-center">
          <div className="divide-x divide-solid divide-white/50 grid grid-cols-3 w-1/3">
            <a
              href=""
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
            >
              <SiLinkedin className="text-white" />
            </a>
            <a
              href=""
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
            >
              <SiGithub className="text-white" />
            </a>
            <a
              href=""
              className="flex items-center justify-center flex-col text-lg transition-filter hover:drop-shadow-[0_0_1em_rgba(100,108,255,0.67)] duration-300 ease-in-out"
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
