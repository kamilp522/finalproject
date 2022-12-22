import React from "react";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Container } from "../../UI/Container/Container";
import { Description, H2, H3 } from "../../UI/Text/Text";

import { aboutPairsTradesContent } from "../content";

const AboutPairsTrades = () => {
  return (
    <Wrapper>
      <Container>
        <H2 tabIndex="0">What are pairs trades?</H2>
        <Description tabIndex="0">
          {aboutPairsTradesContent.whatArePairsTrades}
        </Description>
        <H3 tabIndex="0">How to structure a pairs trade</H3>
        <Description tabIndex="0">
          {aboutPairsTradesContent.structurePairsTrades}
        </Description>
      </Container>
    </Wrapper>
  );
};

export default AboutPairsTrades;
