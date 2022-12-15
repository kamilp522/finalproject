import axios from "axios";

const url = "/api/timeseries";

const getTimeseriesData = async (symbolAndInterval) => {
    const response = await axios.post(url, symbolAndInterval);
    return response.data;
};

const exports = { getTimeseriesData };

export default exports;
