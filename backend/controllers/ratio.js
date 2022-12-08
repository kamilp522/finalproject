const ratioRouter = require("express").Router();

const axios = require("axios");

ratioRouter.post("/", async (request, response) => {
	const { ratioLongSymbol, ratioShortSymbol } = request.body;
	const days = "200";

	const long = await axios.get(
		`https://api.newtonanalytics.com/price/?ticker=${ratioLongSymbol}&interval=1d&dataType=6&observations=${days}`
	);

	if (long.data.code === 400) {
		return response.status(400).json({
			error: "stock with long symbol wasn't found",
		});
	}

	const short = await axios.get(
		`https://api.newtonanalytics.com/price/?ticker=${ratioShortSymbol}&interval=1d&dataType=6&observations=${days}`
	);

	if (short.data.code === 400) {
		return response.status(400).json({
			error: "stock with short symbol wasn't found",
		});
	}

	response.status(200).send({ long: long.data.data, short: short.data.data });
});

module.exports = ratioRouter;
