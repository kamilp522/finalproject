import axios from "axios";
const baseUrl = "/api/holidays";

const getHolidaysData = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

const exports = { getHolidaysData };

export default exports;
