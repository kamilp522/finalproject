import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

export const Button = styled.button`
  padding: 0.5em 1em;
  background-color: ${colors.clr_blue_800};
  color: white;
  font-size: ${font_sizes.fs_400};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.clr_cream_900};
    color: ${colors.clr_very_dark_blue_800};
  }
`;
