import axios from "axios";
const baseUrl = "/api/calculator";

const getCalculatorData = async (symbols) => {
	const response = await axios.post(baseUrl, symbols);
	return response.data;
};

const exports = { getCalculatorData };

export default exports;
