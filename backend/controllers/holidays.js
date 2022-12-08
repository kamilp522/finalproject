const holidaysRouter = require("express").Router();
const axios = require("axios");

holidaysRouter.get("/", async (request, response) => {
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

	const getHolidays = async () => {
		const currentYear = new Date().getFullYear();
		const holidays = [];
		const yearsOfHolidays = 3;

		for (let i = 0; i < yearsOfHolidays; i++) {
			const holidaysResponse = await axios.request(
				setHolidaysOptions(currentYear - i)
			);

			for (let j = 0; j < holidaysResponse.data.length; j++) {
				holidays.push(holidaysResponse.data[j].date);
			}
		}

		return holidays;
	};

	const holidays = await getHolidays();

	response.status(200).send(holidays);
});

module.exports = holidaysRouter;
