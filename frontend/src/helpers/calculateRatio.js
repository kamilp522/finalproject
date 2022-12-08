export const calculateRatio = (data) => {
	const copy = structuredClone(data);
	const ratio_arr = [];

	for (let i = 0; i < copy.long.length; i++) {
		const ratio = copy.long[i][0] / copy.short[i][0];

		ratio_arr.push(+ratio.toFixed(2));
	}

	return ratio_arr;
};
