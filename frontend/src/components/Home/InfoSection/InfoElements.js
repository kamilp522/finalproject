import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 768px) {
    & > div {
      margin: 0.75em;
    }
  }
`;

export const InfoImageWrapper = styled.div`
  border: 1px solid ${colors.clr_cream_900};
  padding: 0.75em;
  margin-bottom: 0.5em;
  height: fit-content;
`;

export const InfoImage = styled.img`
  width: 100%;
  vertical-align: middle;

  @media (min-width: 768px) {
    max-width: 24em;
  }

  @media (min-width: 1000px) {
    max-width: 34em;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;

  @media (min-width: 768px) {
    max-width: 38em;
  }
`;

export const InfoSmall = styled.small`
  font-size: ${font_sizes.fs_350};
  background-color: ${colors.clr_blue_800};
  color: white;
  padding: 0.375em 0.75em;
  width: fit-content;
  text-align: center;
  margin-top: 0.5em;
`;

export const InfoH2 = styled.h2`
  font-size: ${font_sizes.fs_550};
  font-weight: 700;
  margin-block: 0.5em;
  line-height: 1.75rem;
`;

export const InfoP = styled.p`
  font-size: ${font_sizes.fs_400};
  margin-block: 0.5em;
  padding-bottom: 0.5em;
  line-height: 1.375rem;
`;

export const InfoButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const InfoLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding-block: 0.5em;
  width: 100%;
  height: 100%;
  font-size: ${font_sizes.fs_400};
`;
