import React from "react";

import { Form, Input, FormButtonWrapper } from "../UI/Forms/FormElements";
import { Button } from "../UI/Button/Button";

const CalculatorForm = ({
	capital,
	setCapital,
	typedCalculatorLongSymbol,
	setTypedCalculatorLongSymbol,
	typedCalculatorShortSymbol,
	setTypedCalculatorShortSymbol,
	setCurrentCalculatorLongSymbol,
	setCurrentCalculatorShortSymbol,
	typedIndexSymbol,
	setTypedIndexSymbol,
	setCurrentIndexSymbol,
}) => {
	const calculateTrade = (event) => {
		event.preventDefault();

		console.log("click");
	};

	return (
		<Form onSubmit={calculateTrade}>
			<Input
				id="calculator-capital"
				type="text"
				value={capital}
				onChange={({ target }) => setCapital(target.value)}
				placeholder="capital for trade in USD"
			/>
			<Input
				id="calculator-long-symbol"
				type="text"
				value={typedCalculatorLongSymbol}
				onChange={({ target }) =>
					setTypedCalculatorLongSymbol(target.value.toLocaleUpperCase())
				}
				placeholder="long symbol"
			/>
			<Input
				id="calculator-short-symbol"
				type="text"
				value={typedCalculatorShortSymbol}
				onChange={({ target }) =>
					setTypedCalculatorShortSymbol(target.value.toLocaleUpperCase())
				}
				placeholder="short symbol"
			/>
			<Input
				id="calculator-index-symbol"
				type="text"
				value={typedIndexSymbol}
				onChange={({ target }) =>
					setTypedIndexSymbol(target.value.toLocaleUpperCase())
				}
				placeholder="index symbol"
			/>
			<FormButtonWrapper>
				<Button id="calculator-button">Calculate</Button>
			</FormButtonWrapper>
		</Form>
	);
};

export default CalculatorForm;
