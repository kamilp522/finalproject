import axios from "axios";
const url = "/api/holidays";

const getHolidaysData = async () => {
    const response = await axios.get(url);
    return response.data;
};

const exports = { getHolidaysData };

export default exports;
