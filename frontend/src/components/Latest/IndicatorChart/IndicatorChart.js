import React from "react";
import { useState } from "react";
import * as colors from "../../variables/colors";

import {
  ChartContainer,
  ChartH3,
  ChartData,
  Chart,
  ChartButtonsWrapper,
  ChartTimeButton,
  ChartTrend,
  ChartInterpretation,
} from "./IndicatorChartElements";

const IndicatorChart = ({ title, interpretation, options, data }) => {
  const [currentData, setCurrentData] = useState(data);

  const getLastXMonths = (x) => {
    const copy = structuredClone(data);

    const labels = copy.labels.splice(Number(`-${x}`));
    const values = copy.datasets[0].data.splice(Number(`-${x}`));

    setCurrentData({
      labels: labels,
      datasets: [{ data: values, backgroundColor: colors.clr_violet_800 }],
    });
  };

  return (
    <ChartContainer>
      <ChartH3>{title}</ChartH3>
      <ChartData>{interpretation}</ChartData>
      <ChartButtonsWrapper>
        <ChartTimeButton onClick={() => setCurrentData(data)}>
          24 months
        </ChartTimeButton>
        <ChartTimeButton onClick={() => getLastXMonths(12)}>
          12 months
        </ChartTimeButton>
        <ChartTimeButton onClick={() => getLastXMonths(6)}>
          6 months
        </ChartTimeButton>
      </ChartButtonsWrapper>
      <Chart options={options} data={currentData} />
    </ChartContainer>
  );
};

export default IndicatorChart;
