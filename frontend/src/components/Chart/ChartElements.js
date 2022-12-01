import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

import { Bar, Line } from "react-chartjs-2";

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

export const ChartTimeButton = styled.button`
  width: 25%;
  padding: 0.5em 1em;
  background-color: ${colors.clr_blue_400};
  border: 1px solid ${colors.clr_cream_900};
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.clr_violet_300};
  }
`;

export const ChartData = styled.p`
  font-size: ${font_sizes.fs_400};
  color: ${colors.clr_very_dark_blue_900};
  padding-block: 0.75em;
`;

export const BarChart = styled(Bar)`
  min-width: 20em !important;
  min-height: 13em !important;
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${colors.clr_cream_900};
`;

export const LineChart = styled(Line)`
  min-width: 20em !important;
  min-height: 13em !important;
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${colors.clr_cream_900};
`;

export const ChartButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

export const Select = styled.select`
  padding: 0.5em 1em;
  margin-top: 0.5em;
  margin-bottom: 1em;
  cursor: pointer;
  border-radius: 0.25em;
`;
