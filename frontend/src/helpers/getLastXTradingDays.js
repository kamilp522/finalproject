import holidaysService from "../services/holidays";

export const getLastXTradingDays = async (days) => {
	const holidays = await holidaysService.getHolidaysData();
	const lastXTradingDays = [];

	for (let i = 0; lastXTradingDays.length < days; i++) {
		getTradingDay(i, lastXTradingDays, holidays);
	}
	return lastXTradingDays;
};

const getTradingDay = (iterator, array, holidays) => {
	const today = new Date();
	const current = new Date(today.getTime());
	const day = new Date(
		current.setDate(today.getDate() - iterator)
	).toLocaleDateString("en-US");

	// push if day isn't a holiday, saturday or sunday
	if (
		!(current.getDay() === 0 || current.getDay() === 6) &&
		!holidays.includes(day)
	) {
		array.push(day);
	}
};
