import axios from "axios";

import { options } from "../components/Chart/chart_options";

const baseUrl = "/api/timeseries";

const getTimeseriesData = async (symbolAndInterval) => {
  const response = await axios.post(baseUrl, symbolAndInterval);
  return response.data;
};

const getTimeseriesChartParams = (chart_data) => {
  const labels = chart_data.values.map((value) =>
    value.datetime.substring(11, 16)
  );
  const closes = chart_data.values.map((value) =>
    parseFloat(Number(value.close).toFixed(2))
  );

  options.scales.x.ticks.maxTicksLimit = 5;
  options.scales.y.min = Math.floor(Math.min(...closes));

  return {
    labels: labels.reverse(),
    values: closes.reverse(),
  };
};

const exports = { getTimeseriesData, getTimeseriesChartParams };

export default exports;
