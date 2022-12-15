import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

export const Description = styled.p`
  font-size: ${font_sizes.fs_450};
  margin-block: 1em;
  padding-bottom: 1em;
  line-height: ${font_sizes.fs_550};
`;

export const H2 = styled.h2`
  font-size: ${font_sizes.fs_600};
  border-bottom: 2px solid ${colors.clr_violet_400};
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  font-weight: 700;
`;

export const H3 = styled.h3`
  font-size: ${font_sizes.fs_550};
  border-bottom: 1px solid ${colors.clr_violet_400};
  padding-block: 0.25em;
  margin-block: 0.5em;
  font-weight: 700;
`;
