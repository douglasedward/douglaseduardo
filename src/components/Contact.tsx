import { AiOutlineFilePdf } from "react-icons/ai";
import { PiHandshakeDuotone } from "react-icons/pi";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import DouglasResume from "@/assets/DouglasResume.pdf";

const Contact = () => {
  return (
    <div className="lg:mt-48 mt-24 bg-[#1a1a1a] rounded-t-[8rem] pt-24">
      <div className="xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10 h-screen flex flex-col justify-between">
        <div className="mx-auto rounded-full bg-[#252525] w-fit p-10 cursor-default">
          <PiHandshakeDuotone className="h-12 w-12 sm:w-20 sm:h-20 lg:h-28 lg:w-28 transition duration-200 ease-in-out text-gradient hover:text-white/80 hover:scale-125" />
        </div>
        <div className="text">
          <h1 className="font-gilmer-heavy sm:text-[3rem] md:text-[3.4rem] text-[2.9rem] lg:text-[4.9rem] xl:text-[6.6rem] leading-[3.5rem] sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[6.5rem] 2xl:leading-[7rem] cursor-default">
            <span className="text-gradient">Interested?</span>
            <span className="block text-gradient">Let's Get In Touch!</span>
          </h1>
          <p className="text-white/50 cursor-default font-Gilmer sm:mt-10 mt-8 text-base sm:text-lg xl:text-xl 2xl:text-3xl xl:max-w-2xl 2xl:max-w-5xl leading-6">
            You can find me on{" "}
            <a
              href="https://linkedin.com/in/douglas-eduardo"
              target="_blank"
              className="text-white font-gilmer-medium transition duration-200 ease-in-out"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            or you can contact me on{" "}
            <a
              href="mailto:douglaskyrius@gmail.com"
              className="text-white font-gilmer-medium transition duration-200 ease-in-out"
            >
              douglaskyrius@gmail.com
            </a>
            .
          </p>
          <a href={DouglasResume} download={DouglasResume}>
            <button
              id="download-btn"
              className="text-white rounded-full lg:w-fit hover:bg-[#242424] transition duration-500 ease-in-out font-gilmer-bold border-[1px] focus:outline-none flex items-center justify-center gap-x-2 border-white/50 py-3 px-6 text-lg xl:text-xl 2xl:text-2xl my-10 w-full"
            >
              <AiOutlineFilePdf />
              Download Resume
            </button>
          </a>
        </div>
        <div className="flex flex-col py-2 mb-5 w-full space-y-6 items-center justify-center">
          <div className="divide-x divide-solid divide-white/50 grid grid-cols-3 w-full">
            <a
              href="https://linkedin.com/in/douglas-eduardo"
              target="_blank"
              className="flex items-center justify-center flex-col text-lg text-white"
              rel="noreferrer"
            >
              <SlSocialLinkedin className="h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 transition duration-200 ease-in-out" />
            </a>
            <a
              href="https://github.com/DouglasKyrius"
              target="_blank"
              className="flex items-center justify-center flex-col text-lg text-white"
              rel="noreferrer"
            >
              <SiGithub className="h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 transition duration-200 ease-in-out" />
            </a>
            <a
              href="https://wa.me/5567992536106"
              target="_blank"
              className="flex items-center justify-center flex-col text-lg text-white"
              rel="noreferrer"
            >
              <SiWhatsapp className="h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 transition duration-200 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
