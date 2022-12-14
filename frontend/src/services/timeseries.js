import axios from "axios";

const url = "/api/timeseries";

const getTimeseriesData = async (symbolAndInterval) => {
  const response = await axios.post(url, symbolAndInterval);
  return response.data;
};

const getTimeseriesChartParams = (chartData) => {
  const interval = chartData.meta.interval;

  let labels;
  if (interval === "1day" || interval === "1week" || interval === "1month") {
    labels = chartData.values.map((value) => value.datetime.substring(5, 10));
  } else {
    labels = chartData.values.map((value) => value.datetime.substring(11, 16));
  }

  const closes = chartData.values.map((value) =>
    parseFloat(Number(value.close).toFixed(2))
  );

  return {
    labels: labels.reverse(),
    values: closes.reverse(),
  };
};

const exports = { getTimeseriesData, getTimeseriesChartParams };

export default exports;
