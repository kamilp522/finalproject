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

const getDataTreasury10Yield = async () => {
  const response = await axios.get(`${url}/treasury-10-yield`);
  return response.data.data;
};

const getDataGDP = async () => {
  const response = await axios.get(`${url}/gdp`);
  return response.data.data;
};

const getDataPayrolls = async () => {
  const response = await axios.get(`${url}/payroll`);
  return response.data.data;
};

const getVANTAGEIndicatorsChartParams = async (getDataFunction) => {
  const chart_data = await getDataFunction();

  const last_24 = chart_data.slice(0, 24).reverse();

  const labels_last_24 = [];
  last_24.forEach((item) => {
    labels_last_24.push(item.date.substring(0, 7));
  });

  const values_last_24 = [];
  last_24.map((item) => {
    values_last_24.push(item.value);
  });

  return {
    labels: labels_last_24,
    values: values_last_24,
  };
};

const getDBNOMICSIndicatorChartParams = async (getDataFunction) => {
  const chart_data = await getDataFunction();

  const labels_last_24 = chart_data.period.slice(-24);
  const values_last_24 = chart_data.value.slice(-24);

  return {
    labels: labels_last_24,
    values: values_last_24,
  };
};

const exports = {
  getDataManPMI,
  getDataNonManPMI,
  getDataMichiganSentiment,
  getDataTreasury10Yield,
  getDataGDP,
  getDataPayrolls,
  getVANTAGEIndicatorsChartParams,
  getDBNOMICSIndicatorChartParams,
};

export default exports;
