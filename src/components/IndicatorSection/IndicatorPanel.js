import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import {
  IndicatorWrapper,
  IndicatorContainer,
  IndicatorChart,
} from "./IndicatorPanelElements";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const labels = [
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
  "06-21",
];

const options = {
  scales: {
    x: {
      ticks: {
        callback: function (value) {
          return value;
        },
      },
    },
    y: {
      position: "right",
    },
  },
  plugins: {},
};

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.random() * 10),
      backgroundColor: "rgba(33, 33, 222, 0.8)",
    },
  ],
};

const IndicatorPanel = () => {
  return (
    <IndicatorWrapper>
      <IndicatorContainer>
        <IndicatorChart options={options} data={data} />
      </IndicatorContainer>
    </IndicatorWrapper>
  );
};

export default IndicatorPanel;
