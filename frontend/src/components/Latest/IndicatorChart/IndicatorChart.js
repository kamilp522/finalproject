import React from "react";

import {
  ChartContainer,
  ChartH3,
  ChartTextContent,
  Chart,
} from "./IndicatorChartElements";

const IndicatorChart = ({ title, options, data }) => {
  return (
    <ChartContainer>
      <ChartH3>{title}</ChartH3>
      <ChartTextContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cum
        natus blanditiis quia nobis aliquid excepturi nemo laudantium, officia
        molestias laboriosam, iure ullam? Hic a vitae vel, maiores nam rerum!
      </ChartTextContent>
      <Chart options={options} data={data} />
    </ChartContainer>
  );
};

export default IndicatorChart;
