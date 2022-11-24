import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

import { Line } from "react-chartjs-2";

export const IndicatorWrapper = styled.section`
  /* background-color: #666; */
  padding: 1em;
  height: 900px;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const IndicatorChart = styled(Line)`
  width: 20em !important;
  height: 10em !important;
`;
