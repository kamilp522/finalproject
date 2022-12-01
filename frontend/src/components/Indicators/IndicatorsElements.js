import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

export const IndicatorsContainer = styled.div`
  margin-bottom: 1em;
`;

export const IndicatorsH2 = styled.h2`
  font-size: ${font_sizes.fs_600};
  border-bottom: 1px solid ${colors.clr_cream_900};
  padding-bottom: 0.25em;
  margin-bottom: 0.5em;
  font-weight: 700;
`;

export const IndicatorsDescription = styled.p`
  font-size: ${font_sizes.fs_450};
  margin-block: 1em;
  padding-bottom: 1em;
  /* border-bottom: 1px solid ${colors.clr_cream_900}; */
`;

export const Indicator = styled.div`
  margin-bottom: 0.5em;
`;

// export const IndicatorsH3 = styled.h3`
//   font-size: ${font_sizes.fs_500};
//   font-weight: 700;
//   margin-block: 0.25em;
// `;
