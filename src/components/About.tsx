import Lottie from "react-lottie";
import animationData from "@/assets/lottie/floating_coding.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="mx-auto xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10 lg:my-32 my-16 space-y-16 lg:space-y-10">
      <h1
        id="about-heading"
        className="text-white/80 font-gilmer-outlined lg:mb-10 mb-5 text-[3.5rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default"
      >
        About me
      </h1>

      <div className="w-full flex md:flex-row flex-col justify-between items-center">
        <div>
          <p className="text-white/70 cursor-default font-Gilmer xl:text-[1.3rem] lg:text-base md:text-sm text-xs xl:leading-8 2xl:leading-9 lg:leading-6 leading-5 mb-6 md:mb-0">
            With over 5 years of experience in software engineering, I
            specialize in designing scalable backend systems using{" "}
            <span className="text-white font-gilmer-medium">
              Node.js, TypeScript, Express, and NestJS
            </span>
            , with expertise in SQL/NoSQL databases and RESTful APIs. I have a
            strong foundation in{" "}
            <span className="text-white font-gilmer-medium">
              Python, Django
            </span>
            , and{" "}
            <span className="text-white font-gilmer-medium">
              React/Next.js, React Native
            </span>{" "}
            for user-centric applications.
            <br />
            As a mentor and leader, I foster collaboration and a culture of
            continuous learning. My experience also includes{" "}
            <span className="text-white font-gilmer-medium">DevOps</span>{" "}
            practices,{" "}
            <span className="text-white font-gilmer-medium">
              AWS cloud deployment
            </span>
            , and implementing robust security measures for reliable, scalable
            applications. I am driven by innovation and thrive in dynamic,
            growth-focused environments.
          </p>
        </div>
        <div>
          <div
            id="lottie"
            className="!z-10 xl:!h-[500px] xl:!w-[600px] lg:!h-[400px] lg:!w-[480px] !h-[300px] !w-[360px]"
          >
            <Lottie
              options={defaultOptions}
              // height={400}
              // width={400}
              isClickToPauseDisabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
