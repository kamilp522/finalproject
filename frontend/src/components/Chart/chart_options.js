import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  LineElement,
  PointElement
);

export const options = {
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 4,
        maxRotation: 0,
        minRotation: 0,
      },
      grid: {
        display: false,
      },
    },
    y: {
      min: 0,
      position: "right",
      ticks: {
        autoSkip: true,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
      position: "nearest",
    },
  },
};
