import styled from "styled-components";
import * as colors from "../../variables/colors";

export const YahooLink = styled.a`
  display: inline-flex;
  text-decoration: none;
  color: ${colors.clr_blue_700};
  font-weight: 700;

  @media (min-width: 1000px) {
    &:hover {
      color: ${colors.clr_cream_700};
    }
  }
`;
