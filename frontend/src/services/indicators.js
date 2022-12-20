import axios from "axios";

const url = "/api/indicators";

const getDataMPMI = async () => {
  const response = await axios.get(`${url}/pmi-manufacturing`);
  return response.data;
};

const getDataSPMI = async () => {
  const response = await axios.get(`${url}/pmi-non-manufacturing`);
  return response.data;
};

const getDataMichigan = async () => {
  const response = await axios.get(`${url}/michigan-sentiment`);
  return response.data;
};

const getDataTreasury10Yield = async () => {
  const response = await axios.get(`${url}/treasury-10-yield`);
  return response.data;
};

const getDataGDP = async () => {
  const response = await axios.get(`${url}/gdp`);
  return response.data;
};

const getDataPayrolls = async () => {
  const response = await axios.get(`${url}/payroll`);
  return response.data;
};

const exports = {
  getDataMPMI,
  getDataSPMI,
  getDataMichigan,
  getDataTreasury10Yield,
  getDataGDP,
  getDataPayrolls,
};

export default exports;
