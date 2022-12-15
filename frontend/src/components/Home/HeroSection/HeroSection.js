import hero_img_1 from "../../../images/hero_img_1.jpg";
import hero_img_2 from "../../../images/hero_img_2.jpg";
import hero_img_3 from "../../../images/hero_img_3.jpg";

import { useEffect, useState } from "react";
import React from "react";
import {
    Hero,
    HeroContainer,
    Indicators,
    IndicatorItem,
    Indicator,
    HeroContent,
    HeroContentBackground,
    HeroText,
    HeroH1,
    HeroSpan,
} from "./HeroElements";
import { hero_headings } from "../content";
import { CSSTransition } from "react-transition-group";

const HeroSection = () => {
    const headings = hero_headings;

    const [background, setBackground] = useState(hero_img_1);
    const [animation, setAnimation] = useState(false);
    const [animationTimeoutId, setAnimationTimeoutId] = useState(null);
    const [backgroundTimeoutId, setBackgroundTimeoutId] = useState(null);
    const [heading, setHeading] = useState(headings[0]);

    const changeBackgroundImage = (image) => {
        if (background === image) return;

        if (backgroundTimeoutId) clearTimeout(backgroundTimeoutId);
        setBackgroundTimeoutId(setTimeout(() => setBackground(image), 250));

        setAnimation(true);

        if (animationTimeoutId) clearTimeout(animationTimeoutId);
        setAnimationTimeoutId(setTimeout(() => setAnimation(false), 250));
    };

    const changeIndicator = (number) => {
        const current = document.getElementById(`indicator-${number}`);
        const indicators = [...document.querySelectorAll(".indicator")];

        indicators.forEach((indicator) => {
            indicator === current
                ? indicator.classList.add("active")
                : indicator.classList.remove("active");
        });
    };

    const changeBackground = (img, indicator, headingItem) => {
        changeBackgroundImage(img);
        changeIndicator(indicator);
        setHeading(headingItem);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (background === hero_img_1) {
                changeBackground(hero_img_2, 2, headings[1]);
            }
            if (background === hero_img_2) {
                changeBackground(hero_img_3, 3, headings[2]);
            }
            if (background === hero_img_3) {
                changeBackground(hero_img_1, 1, headings[0]);
            }
        }, 4000);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <Hero>
            <HeroContainer>
                <Indicators>
                    <IndicatorItem>
                        <Indicator
                            className="indicator active"
                            id="indicator-1"
                            onClick={() => changeBackground(hero_img_1, 1, headings[0])}
                        />
                    </IndicatorItem>
                    <IndicatorItem>
                        <Indicator
                            className="indicator"
                            id="indicator-2"
                            onClick={() => changeBackground(hero_img_2, 2, headings[1])}
                        />
                    </IndicatorItem>
                    <IndicatorItem>
                        <Indicator
                            className="indicator"
                            id="indicator-3"
                            onClick={() => changeBackground(hero_img_3, 3, headings[2])}
                        />
                    </IndicatorItem>
                </Indicators>
                <HeroContent>
                    <CSSTransition in={animation} timeout={1500} classNames="animation">
                        <HeroContentBackground background={background}>
                            <HeroText>
                                <HeroH1>
                                    <HeroSpan className="hero-head-1">{heading.head1}</HeroSpan>
                                    {heading.middle}
                                    <HeroSpan>{heading.head2}</HeroSpan>
                                    {heading.end}
                                </HeroH1>
                            </HeroText>
                        </HeroContentBackground>
                    </CSSTransition>
                </HeroContent>
            </HeroContainer>
        </Hero>
    );
};

export default HeroSection;
