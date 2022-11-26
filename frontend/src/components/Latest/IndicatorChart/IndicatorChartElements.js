import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

import { Bar } from "react-chartjs-2";

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin-bottom: 2em;
`;

export const ChartH3 = styled.h3`
  font-size: ${font_sizes.fs_550};
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${colors.clr_cream_900};
`;

export const ChartTextContent = styled.p`
  font-size: ${font_sizes.fs_400};
  color: ${colors.clr_very_dark_blue_900};
  padding-block: 0.75em;
`;

export const Chart = styled(Bar)`
  min-width: 20em !important;
  min-height: 13em !important;
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${colors.clr_cream_900};
`;
