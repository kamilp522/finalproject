import axios from "axios";

const url = "/api/quote";

const getQuoteData = async (symbol) => {
  const response = await axios.post(url, symbol);
  return response.data;
};

const exports = { getQuoteData };

export default exports;
