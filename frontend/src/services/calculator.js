import axios from "axios";
const baseUrl = "/api/calculator";

const getCalculatorData = (symbols) => {
	console.log(symbols);

	const response = axios.post(baseUrl, symbols);
	return response.data;
};

const exports = { getCalculatorData };

export default exports;
