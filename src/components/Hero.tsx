import profilePic from "@/assets/profile_pic_512.webp";

const Hero = () => {
  return (
    <div className="vh-70 flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <img
          src={profilePic}
          className="rounded-full !z-10 lg:h-44 lg:w-44 h-28 w-28 hover:scale-[1.05] hover:-rotate-12 transition-filter hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.67)] duration-300 ease-in-out cursor-pointer"
          alt="Douglas Eduardo"
        />
      </div>
      <p className="font-gilmer-medium my-6">
        <span className="text-gradient">Hi, I'm Douglas</span> 👋
      </p>
      <div className="text-center">
        <h1 className="font-gilmer-bold">
          <span className="font-gilmer-outlined">
            Developing Scalable, <br />
          </span>
          <span className="text-gradient">
            Monitored and
            <br />
          </span>
          <span className="text-gradient">Robust webapps.</span> 🚀
        </h1>
      </div>
    </div>
  );
};

export default Hero;
