import axios from "axios";
import { options } from "./chart_options";

// const baseUrl = "http://localhost:3001/api/db-api"
const baseUrl = "/api/db-api";

const getDataManPMI = async () => {
  const response = await axios.get(`${baseUrl}/pmi-manufacturing`);
  return response.data.series.docs[0];
};

const getDataNonManPMI = async () => {
  const response = await axios.get(`${baseUrl}/pmi-non-manufacturing`);
  return response.data.series.docs[0];
};

const getDataMichiganSentiment = async () => {
  const response = await axios.get(`${baseUrl}/michigan-sentiment`);

  return response.data.series.docs[0];
};

const getChartParams = async (getDataFunction) => {
  const chart_data = await getDataFunction();
  options.scales.y.min = Math.floor(Math.min(...chart_data.value) - 3);
  return {
    labels: chart_data.period.slice(-24),
    values: chart_data.value.slice(-24),
  };
};

const exports = {
  getDataManPMI,
  getDataNonManPMI,
  getDataMichiganSentiment,
  getChartParams,
};

export default exports;
