import { useEffect, useRef } from "react";
import { logosLeft, logosRight } from "@/data/skills";
import Skill from "./Skill";
import "@/assets/css/Carousel.css";

const logoRightItems = [...logosRight, ...logosRight];
const logoLeftItems = [...logosLeft, ...logosLeft];

const gap = 10;

export const CarouselRight: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const positionDecreaseRate = -0.5;

  useEffect(() => {
    const trackElement = trackRef.current;

    if (trackElement) {
      const maxScrollWidth = trackElement.scrollWidth / 2;

      trackElement.style.transform = `translateX(-${maxScrollWidth}px)`;
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    let position = -(track.scrollWidth / 2);

    const animate = () => {
      position -= positionDecreaseRate;

      if (position == 0) {
        position = -(track.scrollWidth / 2 + gap);
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
    <>
      <div className="logo-carousel">
        <div ref={trackRef} className="carousel-track">
          {logoRightItems.map(({ logo, description, name, color }, index) => {
            return (
              <Skill
                key={index}
                Logo={logo}
                description={description}
                name={name}
                color={color}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const CarouselLeft: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const positionDecreaseRate = 0.5;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      position -= positionDecreaseRate;

      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = gap;
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
    <>
      <div className="logo-carousel">
        <div ref={trackRef} className="carousel-track">
          {logoLeftItems.map(({ color, description, logo, name }, index) => {
            return (
              <Skill
                key={index}
                Logo={logo}
                description={description}
                name={name}
                color={color}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
