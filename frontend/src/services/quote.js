import axios from "axios";

const baseUrl = "/api/quote";

const getQuoteData = async (symbol) => {
	const response = await axios.post(baseUrl, symbol);
	return response.data;
};

const exports = { getQuoteData };

export default exports;
