import holidaysService from "../services/holidays";

export const getLastXTradingDays = async (days) => {
    let holidays;
    try {
        holidays = await holidaysService.getHolidaysData();
    } catch (exception) {
        console.log(exception.response.data.error);
    }

    const lastXTradingDays = [];

    for (let i = 0; lastXTradingDays.length < days; i++) {
        getXthTradingDay(i, lastXTradingDays, holidays);
    }
    return lastXTradingDays;
};

const getXthTradingDay = (iterator, array, holidays) => {
    const today = new Date();
    const current = new Date(today.getTime());
    const day = new Date(
        current.setDate(today.getDate() - iterator)
    ).toLocaleDateString("en-US");

    // push if day isn't a holiday, saturday or sunday
    if (
        !holidays.includes(day) &&
		current.getDay() !== 6 &&
		current.getDay() !== 0
    ) {
        array.push(day);
    }
};
