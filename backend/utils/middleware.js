const parseBetas = (longBeta, shortBeta) => {
	const parsedLongBeta = Number(longBeta.toFixed(2));
	const parsedShortBeta = Number(shortBeta.toFixed(2));

	return {
		longBeta: parsedLongBeta,
		shortBeta: parsedShortBeta,
	};
};

const getBetaRatio = (longBeta, shortBeta) => {
	return Number((longBeta / shortBeta).toFixed(2));
};

const calculatePairsTradeCapital = (ratio, capital) => {
	const longCapital = Number((capital / (1 + ratio)).toFixed());
	const shortCapital = Number((longCapital * ratio).toFixed());

	return { longCapital, shortCapital };
};

module.exports = {
	parseBetas,
	getBetaRatio,
	calculatePairsTradeCapital,
};
