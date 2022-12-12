import React from "react";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Container } from "../../UI/Container/Container";
import { Description, H2, H3 } from "../../UI/Text/Text";
import WriteDownIdeaForm from "../../Forms/WriteDownIdeaForm";

const WriteDownIdea = () => {
  return (
    <Wrapper>
      <Container>
        <H2>Write Down Your Ideas</H2>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          facere mollitia maxime ratione perspiciatis impedit a minima soluta
          corporis eligendi quaerat, et beatae laborum ullam, dolorem aliquam
          eius quidem. Corporis.
        </Description>
        <WriteDownIdeaForm />
      </Container>
    </Wrapper>
  );
};

export default WriteDownIdea;
