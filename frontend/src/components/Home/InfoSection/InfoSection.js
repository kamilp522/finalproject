import React from "react";

import { useSelector } from "react-redux";

import {
  InfoContainer,
  InfoImageWrapper,
  InfoImage,
  InfoContent,
  InfoSmall,
  InfoH2,
  InfoP,
  InfoButtonWrapper,
  InfoLink,
} from "./InfoElements";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Button } from "../../UI/Button/Button";
import { scrollToTop } from "../../../helpers/scrollToTop";

const InfoSection = (props) => {
  const logged = useSelector((store) => store.logged);

  return (
    <Wrapper>
      <InfoContainer>
        <InfoImageWrapper>
          <InfoImage src={props.content.image} />
        </InfoImageWrapper>
        <InfoContent>
          <InfoSmall>{props.content.small}</InfoSmall>
          <InfoH2>{props.content.heading}</InfoH2>
          <InfoP>{props.content.paragraph}</InfoP>
          <InfoButtonWrapper>
            <InfoLink to={props.content.link} onClick={scrollToTop}>
              <Button>{props.content.button}</Button>
            </InfoLink>
          </InfoButtonWrapper>
        </InfoContent>
      </InfoContainer>
    </Wrapper>
  );
};

export default InfoSection;
