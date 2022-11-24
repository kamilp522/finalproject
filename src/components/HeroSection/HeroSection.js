import hero_img_1 from "../../images/hero_img_1.jpg";
import hero_img_2 from "../../images/hero_img_2.jpg";
import hero_img_3 from "../../images/hero_img_3.jpg";

import { useEffect, useState } from "react";
import React from "react";
import {
  Hero,
  HeroCarousel,
  CarouselIndicators,
  IndicatorItem,
  Indicator,
  Carousel,
  CarouselBackground,
  HeroText,
  HeroH1,
  HeroSpan,
} from "./HeroElements";
import { CSSTransition } from "react-transition-group";

const HeroSection = () => {
  const [background, setBackground] = useState(hero_img_1);
  const [animation, setAnimation] = useState(false);
  const [animationTimeoutId, setAnimationTimeoutId] = useState(null);
  const [backgroundTimeoutId, setBackgroundTimeoutId] = useState(null);

  const changeBackground = (image) => {
    if (background === image) return;

    if (backgroundTimeoutId) clearTimeout(backgroundTimeoutId);
    setBackgroundTimeoutId(setTimeout(() => setBackground(image), 250));

    setAnimation(true);

    if (animationTimeoutId) clearTimeout(animationTimeoutId);
    setAnimationTimeoutId(setTimeout(() => setAnimation(false), 250));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (background === hero_img_1) changeBackground(hero_img_2);
      if (background === hero_img_2) changeBackground(hero_img_3);
      if (background === hero_img_3) changeBackground(hero_img_1);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Hero>
      <HeroCarousel>
        <CarouselIndicators>
          <IndicatorItem>
            <Indicator
              id="carousel-indicator-1"
              onClick={() => {
                changeBackground(hero_img_1);
              }}
            />
          </IndicatorItem>
          <IndicatorItem>
            <Indicator
              id="carousel-indicator-2"
              onClick={() => {
                changeBackground(hero_img_2);
              }}
            />
          </IndicatorItem>
          <IndicatorItem>
            <Indicator
              id="carousel-indicator-3"
              onClick={() => {
                changeBackground(hero_img_3);
              }}
            />
          </IndicatorItem>
        </CarouselIndicators>
        <Carousel>
          <CSSTransition in={animation} timeout={1000} classNames="animation">
            <CarouselBackground
              id="carousel-background"
              background={background}
            >
              <HeroText>
                <HeroH1>
                  <HeroSpan>Learn</HeroSpan> How To <HeroSpan>Adapt</HeroSpan>
                  To Ever-Changing Markets
                </HeroH1>
              </HeroText>
            </CarouselBackground>
          </CSSTransition>
        </Carousel>
      </HeroCarousel>
    </Hero>
  );
};

export default HeroSection;
