import React from "react";
import { useState } from "react";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Container } from "../../UI/Container/Container";
import { H2, H3, Description } from "../../UI/Text/Text";
import CalculatorForm from "../../Forms/CalculatorForm";

const Caluclator = () => {
	const [capital, setCapital] = useState("");

	const [typedCalculatorLongSymbol, setTypedCalculatorLongSymbol] =
		useState("");
	const [typedCalculatorShortSymbol, setTypedCalculatorShortSymbol] =
		useState("");
	const [currentCalculatorLongSymbol, setCurrentCalculatorLongSymbol] =
		useState("");
	const [currentCalculatorShortSymbol, setCurrentCalculatorShortSymbol] =
		useState("");
	const [typedIndexSymbol, setTypedIndexSymbol] = useState("");
	const [currentIndexSymbol, setCurrentIndexSymbol] = useState("");

	return (
		<Wrapper>
			<H2>Pairs Trade Caluclator</H2>
			<Description>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt
				illum nam. Quidem ullam quisquam, quo ratione rerum quasi molestias
				commodi ipsam, autem atque optio laboriosam rem dolore! A, tenetur!
			</Description>
			<CalculatorForm
				capital={capital}
				setCapital={setCapital}
				typedCalculatorLongSymbol={typedCalculatorLongSymbol}
				setTypedCalculatorLongSymbol={setTypedCalculatorLongSymbol}
				typedCalculatorShortSymbol={typedCalculatorShortSymbol}
				setTypedCalculatorShortSymbol={setTypedCalculatorShortSymbol}
				setCurrentCalculatorLongSymbol={setCurrentCalculatorLongSymbol}
				setCurrentCalculatorShortSymbol={setCurrentCalculatorShortSymbol}
				typedIndexSymbol={typedIndexSymbol}
				setTypedIndexSymbol={setTypedIndexSymbol}
				setCurrentIndexSymbol={setCurrentIndexSymbol}
			/>
			<Container></Container>
		</Wrapper>
	);
};

export default Caluclator;
