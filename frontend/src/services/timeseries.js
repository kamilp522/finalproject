import axios from "axios";

const baseUrl = "/api/timeseries";

const getTimeseriesData = async (symbol) => {
  const response = await axios.post(baseUrl, symbol);
  return response.data;
};

const getTimeseriesChartParams = (chart_data) => {
  const labels = chart_data.values.map((value) => value.datetime);
  const opens = chart_data.values.map((value) => value.open);

  return {
    labels: labels,
    values: opens,
  };
};

const exports = { getTimeseriesData, getTimeseriesChartParams };

export default exports;
