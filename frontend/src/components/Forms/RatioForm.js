import React from "react";

import * as colors from "../variables/colors";

import ratioService from "../../services/ratio";
import holidaysService from "../../services/holidays";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const RatioForm = ({
	ratioLongSymbol,
	setRatioLongSymbol,
	ratioShortSymbol,
	setRatioShortSymbol,
	setChartData,
}) => {
	const getRatio = async (event) => {
		event.preventDefault();

		const ratio = await ratioService.getRatioData({
			ratioLongSymbol,
			ratioShortSymbol,
		});

		console.log(ratio);

		const ratio_chart_data = ratioService.getRatioChartParams(ratio);

		console.log(ratio_chart_data);

		const holidays = await holidaysService.getHolidaysData();

		console.log(holidays);
	};

	return (
		<Form onSubmit={getRatio}>
			<Input
				id="ratio-long-symbol"
				type="text"
				value={ratioLongSymbol.toLocaleUpperCase()}
				onChange={({ target }) => setRatioLongSymbol(target.value)}
				placeholder="type long symbol"
			/>
			<Input
				id="ratio-short-symbol"
				type="text"
				value={ratioShortSymbol.toLocaleUpperCase()}
				onChange={({ target }) => setRatioShortSymbol(target.value)}
				placeholder="type short symbol"
			/>
			<FormButtonWrapper>
				<Button id="ratio-button">Look up ratio</Button>
			</FormButtonWrapper>
		</Form>
	);
};

export default RatioForm;
