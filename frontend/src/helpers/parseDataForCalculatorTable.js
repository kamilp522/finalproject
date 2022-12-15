export const parseDataForCalculatorTable = (data) => {
    return {
        betaRatio: data.betaRatio,
        longPrice: data.longPrice,
        longShares: Math.round(data.longCapital / data.longPrice),
        longBeta: data.longBeta,
        longTotal: Math.round(data.longCapital / data.longPrice) * data.longPrice,
        shortPrice: data.shortPrice,
        shortShares: Math.round(data.shortCapital / data.shortPrice),
        shortBeta: data.shortBeta,
        shortTotal:
			Math.round(data.shortCapital / data.shortPrice) * data.shortPrice,
    };
};
