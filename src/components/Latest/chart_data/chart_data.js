import * as colors from "../../variables/colors";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const labels = [
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

export const options = {
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: labels.length / 3,
        maxRotation: 0,
        minRotation: 0,
      },
      grid: {
        display: false,
      },
    },
    y: {
      position: "right",
      ticks: {
        // maxTicksLimit: labels.length / 1.75,
      },
    },
  },
  plugins: {},
};

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.random() * 10 + 3),
      backgroundColor: colors.clr_violet_800,
    },
  ],
};
