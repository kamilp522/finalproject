import { convertToUSD } from "./convertToUSD";

export const parseDataForCalculatorTable = (data) => {
	console.log(data);

	return {
		betaRatio: data.betaRatio,
		longPrice: convertToUSD(data.longPrice),
		longShares: Math.round(data.longCapital / data.longPrice),
		longBeta: data.longBeta,
		longTotal: convertToUSD(
			Math.round(data.longCapital / data.longPrice) * data.longPrice
		),
		shortPrice: convertToUSD(data.shortPrice),
		shortShares: Math.round(data.shortCapital / data.shortPrice),
		shortBeta: data.shortBeta,
		shortTotal: convertToUSD(
			Math.round(data.shortCapital / data.shortPrice) * data.shortPrice
		),
	};
};
