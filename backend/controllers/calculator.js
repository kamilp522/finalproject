const calculatorRouter = require("express").Router();
const axios = require("axios");

calculatorRouter.post("/", async (request, response) => {
	const { longSymbol, shortSymbol, indexSymbol } = request.body;

	console.log(longSymbol);
	console.log(shortSymbol);
	console.log(indexSymbol);

	// get data from the last ~5 years (1250 trading days)
	const days = 1250;

	const longBeta = await axios.get(
		`https://api.newtonanalytics.com/stock-beta/?ticker=${longSymbol}&index=^${indexSymbol}&interval=1d​&observations=${days}`
	);
	if (long.data.status == 400) {
		return response.status(400).json({
			error: `stock with symbol ${typedRatioLongSymbol} (long) wasn't found or indexSymbol (${indexSymbol}) isn't correct`,
		});
	}

	const shortBeta = await axios.get(
		`https://api.newtonanalytics.com/stock-beta/?ticker=${shortSymbol}&index=^${indexSymbol}&interval=1d​&observations=${days}`
	);
	if (short.data.status == 400) {
		return response.status(400).json({
			error: `stock with symbol ${typedRatioShortSymbol} (short) wasn't found or indexSymbol (${indexSymbol}) isn't correct`,
		});
	}

	response.status(200).send({ longBeta, shortBeta });
});

module.exports = calculatorRouter;
