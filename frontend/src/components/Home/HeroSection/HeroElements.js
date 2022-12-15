import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  min-height: calc(33vh - 0.1px);
  color: white;

  @media (min-width: 578px) {
    min-height: calc(55vh - 0.1px);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Indicators = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const IndicatorItem = styled.li`
  margin: 0 0.5em;

  @media (min-width: 578px) {
    margin: 0 0.75em;
  }
`;

export const Indicator = styled.button`
  width: 1em;
  height: 1em;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  border: none;

  &.active {
    background-color: ${colors.clr_blue_800};
  }

  @media (min-width: 768px) {
    width: 1.25em;
    height: 1.25em;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeroContentBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ background }) => background});
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
    background-color: ${colors.clr_shade};
    z-index: 0;
  }

  &.animation-enter {
    opacity: 1;
  }

  &.animation-enter-active {
    opacity: 0.25;
    transition: opacity 0.6s ease-in-out;
  }

  &.animation-enter-done {
    opacity: 0.75;
  }

  &.animation-exit {
    opacity: 0.25;
  }

  &.animation-exit-active {
    opacity: 1;
    transition: opacity 0.6s ease-in-out;
  }

  &.animation-exit-done {
    opacity: 1;
  }
`;

export const HeroText = styled.div`
  position: relative;
  z-index: 1;
  max-width: 15em;
  background-color: ${colors.clr_very_dark_blue_500};
  border-radius: 1rem;
  padding: 1em 1.5em;

  @media (min-width: 768px) {
    max-width: 25em;
  }

  @media (min-width: 1000px) {
    max-width: 35em;
  }
`;

export const HeroH1 = styled.h1`
  display: inline-block;
  font-size: ${font_sizes.fs_450};
  padding-block: 0.25em;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${font_sizes.fs_650};
  }

  @media (min-width: 1000px) {
    font-size: ${font_sizes.fs_700};
  }
`;

export const HeroSpan = styled.span`
  font-size: ${font_sizes.fs_550};
  color: ${colors.clr_violet_800};

  @media (min-width: 768px) {
    font-size: ${font_sizes.fs_700};
  }

  @media (min-width: 1000px) {
    font-size: ${font_sizes.fs_800};
  }
`;
