import axios from "axios";

const url = "/api/indicators";

const getDataManPMI = async () => {
  const response = await axios.get(`${url}/pmi-manufacturing`);
  return response.data.series.docs[0];
};

const getDataNonManPMI = async () => {
  const response = await axios.get(`${url}/pmi-non-manufacturing`);
  return response.data.series.docs[0];
};

const getDataMichiganSentiment = async () => {
  const response = await axios.get(`${url}/michigan-sentiment`);

  return response.data.series.docs[0];
};

const getIndicatorChartParams = async (getDataFunction) => {
  const chart_data = await getDataFunction();

  const labels_last_24_months = chart_data.period.slice(-24);
  const values_last_24_months = chart_data.value.slice(-24);

  return {
    labels: labels_last_24_months,
    values: values_last_24_months,
  };
};

const exports = {
  getDataManPMI,
  getDataNonManPMI,
  getDataMichiganSentiment,
  getIndicatorChartParams,
};

export default exports;
