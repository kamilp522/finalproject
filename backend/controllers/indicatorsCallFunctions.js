const axios = require("axios");

const getMPMI = async (request, response) => {
	const ism_manufacturing = await axios.get(
		"https://api.db.nomics.world/v22/series/ISM/pmi/pm?observations=1"
	);
	return response.status(200).json(ism_manufacturing.data);
};

const getSPMI = async (request, response) => {
	const ism_non_manufacturing = await axios.get(
		"https://api.db.nomics.world/v22/series?observations=1&series_ids=ISM%2Fnm-pmi%2Fpm"
	);
	return response.status(200).json(ism_non_manufacturing.data);
};

const getMichigan = async (request, response) => {
	const michigan_sentiment = await axios.get(
		"https://api.db.nomics.world/v22/series/SCSMICH/MICS/ICS?observations=1"
	);
	return response.status(200).json(michigan_sentiment.data);
};

exports.getMPMI = getMPMI;
exports.getSPMI = getSPMI;
exports.getMichigan = getMichigan;
