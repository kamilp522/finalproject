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
      position: "right",
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
      position: "nearest",
    },
  },
};
