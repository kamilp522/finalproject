import React from "react";

import PropTypes from "prop-types";

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

const InfoSection = ({ content }) => {
  return (
    <Wrapper>
      <InfoContainer>
        <InfoImageWrapper>
          <InfoImage alt="" src={content.image} />
        </InfoImageWrapper>
        <InfoContent>
          <InfoSmall tabIndex="0">{content.small}</InfoSmall>
          <InfoH2 tabIndex="0">{content.heading}</InfoH2>
          <InfoP tabIndex="0">{content.paragraph}</InfoP>
          <InfoButtonWrapper>
            <InfoLink to={content.link} onClick={scrollToTop}>
              <Button tabIndex="-1" className={content.class}>
                {content.button}
              </Button>
            </InfoLink>
          </InfoButtonWrapper>
        </InfoContent>
      </InfoContainer>
    </Wrapper>
  );
};

InfoSection.propTypes = {
  content: PropTypes.object.isRequired,
};

export default InfoSection;
