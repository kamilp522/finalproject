import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const getDataManPMI = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/ism-manufacturing"
  );
  return response.data.series.docs[0];
};

export const getDataNonManPMI = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/ism-non-manufacturing"
  );
  return response.data.series.docs[0];
};

export const getChartParams = async (getDataFunction) => {
  const chart_data = await getDataFunction();
  options.scales.y.min = Math.floor(Math.min(...chart_data.value) - 5);
  return {
    labels: chart_data.period,
    values: chart_data.value,
  };
};

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
