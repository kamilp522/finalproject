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
        font: {
          size: 14,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      position: "right",
      ticks: {
        // remove first tick on y label
        callback: (value, index, values) => (index == 0 ? undefined : value),
        autoSkip: true,
        font: {
          size: 16,
        },
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
