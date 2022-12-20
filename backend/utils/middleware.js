const axios = require("axios");

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

const getHolidays = async () => {
	const currentYear = new Date().getFullYear();
	const holidays = [];
	const yearsOfHolidays = 5;

	for (let i = 0; i < yearsOfHolidays; i++) {
		const holidaysResponse = await axios.request(
			setHolidaysOptions(currentYear - i)
		);

		for (let j = 0; j < holidaysResponse.data.length; j++) {
			holidays.push(holidaysResponse.data[j].date);
		}
	}

	const holidaysParsed = parseHolidays(holidays);
	return holidaysParsed;
};

const setHolidaysOptions = (year) => {
	return {
		method: "GET",
		url: `https://public-holiday.p.rapidapi.com/${year}/US`,
		headers: {
			"Accept-Encoding": "json",
			"X-RapidAPI-Key": process.env.RAPID_KEY,
			"X-RapidAPI-Host": "public-holiday.p.rapidapi.com",
		},
	};
};

const parseHolidays = (array) => {
	const holidaysParsed = array.map((holiday) => {
		const monthDay = holiday.slice(-5);
		const year = `-${holiday.slice(0, 4)}`;
		const dateWithBacktis = (monthDay + year).split("-").join("/");
		const dateNoLeadingZeros = dateWithBacktis.replace(/(^|\/)0+/g, "$1");

		return dateNoLeadingZeros;
	});
	return holidaysParsed;
};

const parseVANTAGEData = (data) => {
	const last24 = data.slice(0, 24).reverse();

	const labelsLast24 = [];
	last24.forEach((item) => {
		labelsLast24.push(item.date.substring(0, 7));
	});

	const valuesLast24 = [];
	last24.map((item) => {
		valuesLast24.push(item.value);
	});

	return {
		labels: labelsLast24,
		values: valuesLast24,
	};
};

const parseDBNOMICSData = (data) => {
	const labelsLast24 = data.period.slice(-24);
	const valuesLast24 = data.value.slice(-24);

	return {
		labels: labelsLast24,
		values: valuesLast24,
	};
};

const parseTimeseriesData = (data) => {
	const interval = data.meta.interval;

	let labels;
	if (interval === "1day" || interval === "1week" || interval === "1month") {
		labels = data.values.map((value) => value.datetime.substring(5, 10));
	} else {
		labels = data.values.map((value) => value.datetime.substring(11, 16));
	}

	const closes = data.values.map((value) =>
		parseFloat(Number(value.close).toFixed(2))
	);

	return {
		labels: labels.reverse(),
		values: closes.reverse(),
	};
};

module.exports = {
	parseBetas,
	getBetaRatio,
	calculatePairsTradeCapital,
	getHolidays,
	parseVANTAGEData,
	parseDBNOMICSData,
	parseTimeseriesData,
};
