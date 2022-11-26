import axios from "axios";
import { options } from "./chart_options";

export const getDataManPMI = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/pmi-manufacturing"
  );
  return response.data.series.docs[0];
};

export const getDataNonManPMI = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/pmi-non-manufacturing"
  );
  return response.data.series.docs[0];
};

export const getDataMichiganSentiment = async () => {
  const response = await axios.get(
    "http://localhost:3001/api/michigan-sentiment"
  );

  return response.data.series.docs[0];
};

export const getChartParams = async (getDataFunction) => {
  const chart_data = await getDataFunction();
  options.scales.y.min = Math.floor(Math.min(...chart_data.value) - 3);
  return {
    labels: chart_data.period.slice(-24),
    values: chart_data.value.slice(-24),
  };
};
