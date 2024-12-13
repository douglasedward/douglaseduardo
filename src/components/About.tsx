import Lottie from "lottie-react";
import animationData from "@/assets/lottie/floating_coding.json";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto lg:my-24 my-12">
      <h1
        id="about-heading"
        className="text-white/80 font-gilmer-outlined lg:mb-10 mb-5 sm:text-[5.2rem] md:text-[6.4rem] text-[3.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default"
      >
        About me
      </h1>

      <div className="w-full flex md:flex-row flex-col justify-between items-center ">
        <div>
          <p className="text-white/70 font-Gilmer xl:text-[1.3rem] 2xl:text-[1.5rem] lg:text-base md:text-sm text-xs xl:leading-8 2xl:leading-9 lg:leading-6 leading-5 mb-6 md:mb-0">
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
            <span className="text-white font-gilmer-medium">React/Next.js</span>{" "}
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
          <div className="lf-player-container">
            <div
              id="lottie"
              className="xl:!h-[400px] !z-10 xl:!w-[600px] lg:!h-[280px] lg:!w-[480px] md:!h-[240px] md:!w-[300px] !h-[180px] !w-[360px]"
            >
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
