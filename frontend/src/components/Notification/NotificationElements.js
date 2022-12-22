import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

export const NotificationWrapper = styled.div`
  padding: 1em;
  background-color: ${({ error }) =>
    error ? colors.clr_red_800 : colors.clr_green_800};
  color: white;

  @media (min-width: 1000px) {
    text-align: center;
  }
`;

export const NotificationContent = styled.div`
  font-size: ${font_sizes.fs_500};
  font-weight: 700;
  letter-spacing: 1px;
`;
