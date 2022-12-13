import React from "react";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Container } from "../../UI/Container/Container";
import { Description, H2, H3 } from "../../UI/Text/Text";

import { aboutPairsTradesContent } from "../content";

const AboutPairsTrades = () => {
  return (
    <Wrapper>
      <Container>
        <H2>What are pairs trades?</H2>
        <Description>{aboutPairsTradesContent.whatArePairsTrades}</Description>
        <H3>How to structure a pairs trade</H3>
        <Description>
          {aboutPairsTradesContent.structurePairsTrades}
        </Description>
      </Container>
    </Wrapper>
  );
};

export default AboutPairsTrades;
