import axios from "axios";

import { options } from "../components/Chart/chart_options";

const url = "/api/timeseries";

const getTimeseriesData = async (symbolAndInterval) => {
  const response = await axios.post(url, symbolAndInterval);
  return response.data;
};

const getTimeseriesChartParams = (chart_data) => {
  const interval = chart_data.meta.interval;

  let labels;
  if (interval === "1day" || interval === "1week" || interval === "1month") {
    labels = chart_data.values.map((value) => value.datetime.substring(5, 10));
  } else {
    labels = chart_data.values.map((value) => value.datetime.substring(11, 16));
  }

  const closes = chart_data.values.map((value) =>
    parseFloat(Number(value.close).toFixed(2))
  );

  // options.scales.y.min = Math.floor(Math.min(...closes));

  return {
    labels: labels.reverse(),
    values: closes.reverse(),
  };
};

const exports = { getTimeseriesData, getTimeseriesChartParams };

export default exports;
