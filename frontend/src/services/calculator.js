import axios from "axios";
const url = "/api/calculator";

const getCalculatorData = async (symbols) => {
  const response = await axios.post(url, symbols);
  return response.data;
};

const exports = { getCalculatorData };

export default exports;
