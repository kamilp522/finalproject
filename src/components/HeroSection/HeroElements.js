import styled from "styled-components";
// import background from "../../images/hero_img_1.jpg";

export const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: #888;
  min-height: calc(100vh - 0.1px);
`;

export const HeroCarousel = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  background-color: #0d0d0d;
`;

export const CarouselIndicators = styled.ul`
  position: absolute;
  width: 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Indicator = styled.li`
  width: 2em;
  height: 2em;
  margin-block: 1em;
  background-color: red;
  border-radius: 50%;

  &:hover {
    background-color: orange;
    cursor: pointer;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
`;

export const CarouselItem = styled.div`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  /* background-size: center; */
  /* background-attachment: fixed; */
  width: 100%;
  height: 100%;
`;
