import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

export const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: calc(33vh - 0.1px);
  color: white;
`;

export const HeroCarousel = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const CarouselIndicators = styled.ul`
  position: absolute;
  width: 3em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Indicator = styled.li`
  width: 1em;
  height: 1em;
  margin-block: 0.5em;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  &.active {
    background-color: ${colors.clr_accent_800};
  }
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
`;

export const CarouselItem = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${colors.clr_background_shade};
    z-index: 0;
  }
`;

export const HeroText = styled.div`
  position: relative;
  z-index: 1;
  max-width: 15em;
  background-color: ${colors.clr_primary_400};
  border-radius: 1rem;
  padding: 1em 2em;
`;

export const HeroH1 = styled.h1`
  display: inline-block;
  font-size: ${font_sizes.fs_450};
  padding-block: 0.25em;
  font-weight: 700;
`;

export const HeroSpan = styled.span`
  font-size: ${font_sizes.fs_550};
  color: ${colors.clr_font_800};
`;
