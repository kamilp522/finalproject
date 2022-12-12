import axios from "axios";

import { calculateRatio } from "../helpers/calculateRatio";

const url = "/api/ratio";

const getRatioData = async (symbols) => {
  const response = await axios.post(url, symbols);
  return response.data;
};

const getRatioChartParams = (chart_data) => {
  const ratio = calculateRatio(chart_data);
  return ratio;
};

const exports = { getRatioData, getRatioChartParams };

export default exports;
