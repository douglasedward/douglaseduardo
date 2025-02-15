import { useEffect, useRef } from "react";
import { IconType } from "react-icons";
import Skill from "./Skill";
import "@/assets/css/Carousel.css";

const halfGap = 5;

interface CarouselProps {
  direction: "left" | "right";
  logos: SkillType[];
}

type SkillType = {
  logo: IconType;
  name: string;
  description: string;
  color: string;
};

const Carousel: React.FC<CarouselProps> = ({ direction, logos }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isRight = direction === "right";
  const positionDecreaseRate = isRight ? -0.5 : 0.5;

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const trackElement = trackRef.current;
    if (!trackElement) return;

    const maxScrollWidth = trackElement.scrollWidth / 2;
    let position = isRight ? -maxScrollWidth : 0;
    trackElement.style.transform = `translateX(${position}px)`;

    let animationFrameId: number;

    const animate = () => {
      position -= positionDecreaseRate;

      if (isRight) {
        if (position == 0) position = -(maxScrollWidth + halfGap);
      } else if (Math.abs(position) >= maxScrollWidth) position = halfGap;

      trackElement.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRight, positionDecreaseRate]);

  return (
    <>
      <div className="logo-carousel">
        <div ref={trackRef} className="carousel-track">
          {duplicatedLogos.map(({ color, description, logo, name }, index) => {
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

export default Carousel;
