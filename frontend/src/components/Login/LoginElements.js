import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

import { Link } from "react-router-dom";

export const LoginSmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginSmall = styled.small`
  display: block;
  margin-block: 1em;
  font-size: ${font_sizes.fs_400};
  color: ${colors.clr_shade};
`;

export const SignInLink = styled(Link)`
  color: ${colors.clr_black_full};
  font-size: ${font_sizes.fs_450};
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  @media (min-width: 1000px) {
    &:hover {
      color: ${colors.clr_violet_400};
    }
  }
`;
