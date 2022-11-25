import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const getDataMPMI = async () => {
  const response = await axios.get(
    "https://api.db.nomics.world/v22/series/ISM/pmi/pm?observations=1"
  );
  const data = response.data.series.docs[0];
  return data;
};

export const getDataSPMI = async () => {
  const response = await axios.get(
    "https://api.db.nomics.world/v22/series?observations=1&series_ids=ISM%2Fnm-pmi%2Fpm"
  );
  const data = response.data.series.docs[0];
  return data;
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
