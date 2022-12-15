import React from "react";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Container } from "../../UI/Container/Container";
import { Description, H2 } from "../../UI/Text/Text";
import WriteDownIdeaForm from "../../Forms/WriteDownIdeaForm";

const WriteDownIdea = () => {
    return (
        <Wrapper>
            <Container>
                <H2>Write Down Your Ideas</H2>
                <Description>
          It is very important to have a list of all ideas for trades that you
          have constructed. We provide simple and elegant tool for saving your
          trade schemes to our database.
                </Description>
                <WriteDownIdeaForm />
            </Container>
        </Wrapper>
    );
};

export default WriteDownIdea;
