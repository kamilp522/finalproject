import React from "react";
import {
  InfoWrapper,
  InfoContainer,
  InfoImageWrapper,
  InfoImage,
  InfoContent,
  InfoSmall,
  InfoH2,
  InfoP,
  InfoButtonWrapper,
} from "./InfoElements";
import { Button } from "../UI/Button/Button";

const InfoSection = (props) => {
  return (
    <InfoWrapper>
      <InfoContainer>
        <InfoImageWrapper>
          <InfoImage src={props.content.image} />
        </InfoImageWrapper>
        <InfoContent>
          <InfoSmall>{props.content.small}</InfoSmall>
          <InfoH2>{props.content.heading}</InfoH2>
          <InfoP>{props.content.paragraph}</InfoP>
          <InfoButtonWrapper>
            <Button>{props.content.button}</Button>
          </InfoButtonWrapper>
        </InfoContent>
      </InfoContainer>
    </InfoWrapper>
  );
};

export default InfoSection;
