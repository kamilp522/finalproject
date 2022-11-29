import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

export const IndicatorsContainer = styled.section`
  padding: 1.5em;
  /* height: 1000px; */
`;

export const IndicatorsText = styled.div`
  border-bottom: 1px solid ${colors.clr_very_dark_blue_800};
  padding-bottom: 1em;
  margin-bottom: 1.5em;
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
`;

export const Indicator = styled.div`
  margin-block: 1em;
  padding-block: 1em;
  border-top: 1px solid ${colors.clr_cream_900};
`;

export const IndicatorsH3 = styled.h3`
  font-size: ${font_sizes.fs_500};
  font-weight: 700;
  margin-block: 0.25em;
`;
