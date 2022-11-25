import React from "react";
import { LatestContainer, LatestH2 } from "./LatestElements";

import IndicatorChart from "./IndicatorChart/IndicatorChart";
import { options, data } from "../Latest/chart_data/chart_data";

const Latest = () => {
  return (
    <LatestContainer>
      <LatestH2>Latest Economic Data</LatestH2>
      <IndicatorChart options={options} data={data} />
    </LatestContainer>
  );
};

export default Latest;
