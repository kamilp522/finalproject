import hero_img_1 from "../../images/hero_img_1.jpg";
import hero_img_2 from "../../images/hero_img_2.jpg";
import hero_img_3 from "../../images/hero_img_3.jpg";

import React from "react";
import {
  HeroWrapper,
  HeroCarousel,
  CarouselIndicators,
  Carousel,
  Indicator,
  CarouselItem,
  HeroText,
  HeroH1,
  HeroSpan,
} from "./HeroElements";

const HeroSection = () => {
  const carouselSlideChanger = () => {
    const carousel_items = document.querySelectorAll(".carousel-item");
    console.log(carousel_items);
  };

  carouselSlideChanger();

  return (
    <HeroWrapper>
      <HeroCarousel>
        <CarouselIndicators>
          <Indicator />
          <Indicator />
          <Indicator />
        </CarouselIndicators>
        <Carousel>
          <CarouselItem
            background={hero_img_1}
            id="carousel-item-1"
            className="carousel-item"
            active
          >
            <HeroText>
              <HeroH1>
                <HeroSpan>Learn</HeroSpan> How to <HeroSpan>Adapt</HeroSpan> to
                Ever-Changing Markets
              </HeroH1>
            </HeroText>
          </CarouselItem>
          <CarouselItem
            background={hero_img_2}
            id="carousel-item-2"
            className="carousel-item"
          >
            <HeroText>
              <HeroH1>LEARN</HeroH1>
            </HeroText>
          </CarouselItem>
          <CarouselItem
            background={hero_img_3}
            id="carousel-item-3"
            className="carousel-item"
          >
            <HeroText>
              <HeroH1>LEARN</HeroH1>
            </HeroText>
          </CarouselItem>
        </Carousel>
      </HeroCarousel>
    </HeroWrapper>
  );
};

export default HeroSection;
