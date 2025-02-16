import { IconType } from "react-icons";
import Skill from "./Skill";
import useCarouselAnimation from "@/utils/hooks/useCarouselAnimation";
import "@/assets/css/Carousel.css";

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
  const isRight = direction === "right";
  const trackRef = useCarouselAnimation(isRight);

  const items = [...logos, ...logos];

  return (
    <div className="logo-carousel">
      <div ref={trackRef} className="carousel-track">
        {items.map(({ color, description, logo, name }, index) => {
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
  );
};

export default Carousel;
