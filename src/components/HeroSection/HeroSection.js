import React from "react";
import {
  HeroWrapper,
  HeroCarousel,
  CarouselIndicators,
  Carousel,
  Indicator,
  CarouselItem,
} from "./HeroElements";

import hero_img_1 from "../../images/hero_img_1.jpg";
import hero_img_2 from "../../images/hero_img_2.jpg";
import hero_img_3 from "../../images/hero_img_3.jpg";

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroCarousel>
        <CarouselIndicators>
          <Indicator />
          <Indicator />
          <Indicator />
        </CarouselIndicators>
        <Carousel>
          <CarouselItem background={hero_img_1} />
          <CarouselItem background={hero_img_2} />
          <CarouselItem background={hero_img_3} />
        </Carousel>
      </HeroCarousel>
    </HeroWrapper>
  );
};

export default HeroSection;
