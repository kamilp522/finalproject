const calculatorRouter = require("express").Router();
const axios = require("axios");
const middleware = require("../utils/middleware");

calculatorRouter.post("/", async (request, response) => {
	const { capital, longSymbol, shortSymbol, indexSymbol } = request.body;

	// get data from the last ~5 years (1250 trading days)
	const days = 1250;

	if (!capital) {
		return response.status(400).json({
			error: "must provide capital",
		});
	}

	if (!/^\d+$/.test(capital)) {
		return response.status(400).json({
			error: "capital value must be a number",
		});
	}

	const longBeta = await axios.get(
		`https://api.newtonanalytics.com/stock-beta/?ticker=${longSymbol}&index=^${indexSymbol}&interval=1d&observations=${days}`
	);
	if (longBeta.data.status == 400) {
		return response.status(400).json({
			error: `stock with symbol ${longSymbol} (long) wasn't found or indexSymbol (${indexSymbol}) isn't correct`,
		});
	}

	const shortBeta = await axios.get(
		`https://api.newtonanalytics.com/stock-beta/?ticker=${shortSymbol}&index=^${indexSymbol}&interval=1d&observations=${days}`
	);
	if (shortBeta.data.status == 400) {
		return response.status(400).json({
			error: `stock with symbol ${shortSymbol} (short) wasn't found or indexSymbol (${indexSymbol}) isn't correct`,
		});
	}

	const betas = middleware.parseBetas(longBeta.data.data, shortBeta.data.data);
	const betaRatio = middleware.getBetaRatio(betas.longBeta, betas.shortBeta);

	const pairsTradeCapital = middleware.calculatePairsTradeCapital(
		betaRatio,
		capital
	);

	response.status(200).send({ ...pairsTradeCapital, ...betas, betaRatio });
});

module.exports = calculatorRouter;
