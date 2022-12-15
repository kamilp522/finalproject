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
                    <InfoImage src={content.image} />
                </InfoImageWrapper>
                <InfoContent>
                    <InfoSmall>{content.small}</InfoSmall>
                    <InfoH2>{content.heading}</InfoH2>
                    <InfoP>{content.paragraph}</InfoP>
                    <InfoButtonWrapper>
                        <InfoLink to={content.link} onClick={scrollToTop}>
                            <Button className={content.class}>{content.button}</Button>
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
