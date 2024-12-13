import { useEffect, useRef } from "react";
import { FaAws, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiNestjs,
  SiExpress,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiElasticsearch,
  SiKubernetes,
  SiTerraform,
  SiGraphql,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import "@/assets/css/Carousel.css";

const logos = [
  <SiNodedotjs key="1" />,
  <SiTypescript key="2" />,
  <SiJavascript key="3" />,
  <SiPython key="4" />,
  <SiNestjs key="5" />,
  <SiExpress key="6" />,
  <SiDjango key="7" />,
  <SiReact key="8" />,
  <TbBrandReactNative key="9" />,
  <SiNextdotjs key="10" />,
  <SiTailwindcss key="11" />,
  <SiPostgresql key="12" />,
  <SiMongodb key="13" />,
  <DiRedis key="14" />,
  <SiElasticsearch key="15" />,
  <FaAws key="16" />,
  <FaGitAlt key="17" />,
  <FaDocker key="18" />,
  <SiKubernetes key="19" />,
  <SiTerraform key="20" />,
  <SiGraphql key="21" />,
];

const logoItems = [...logos, ...logos];

const Carousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  let positionDecreaseRate = 0.5;
  const gap = 80;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      position -= positionDecreaseRate;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = gap / 2;
      }

      track.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [positionDecreaseRate]);

  return (
    <div className="logo-carousel">
      <div
        ref={trackRef}
        className="carousel-track"
        onMouseEnter={() => (positionDecreaseRate = 0.25)}
        onMouseLeave={() => (positionDecreaseRate = 0.5)}
      >
        {logoItems.map((logo, index) => (
          <div key={index} className="logo">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
