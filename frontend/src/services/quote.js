import axios from "axios";
import { options } from "../Charts/bar_chart_options";

const baseUrl = "/api/quote";

const getQuoteData = async (symbol) => {
  const response = await axios.post(baseUrl, symbol);
  return response.data;
};

const getQuotesChartParams = async (getDataFunction) => {
  const chart_data = await getDataFunction();
  return {
    labels: chart_data.period.slice(-24),
    values: chart_data.value.slice(-24),
  };
};

const exports = { getQuoteData, getQuotesChartParams };

export default exports;
