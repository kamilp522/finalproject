import React from "react";
import { useState } from "react";

import { Wrapper } from "../../UI/Wrapper/Wrapper";
import { Container } from "../../UI/Container/Container";
import { H2, H3, Description } from "../../UI/Text/Text";

import RatioForm from "../../Forms/RatioForm";

const Ratio = () => {
	const [ratioLongSymbol, setRatioLongSymbol] = useState("");
	const [ratioShortSymbol, setRatioShortSymbol] = useState("");
	const [chartData, setChartData] = useState({ labels: null, datasets: null });

	return (
		<Wrapper>
			<H2>Ratio Chart</H2>
			<Description>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt
				illum nam. Quidem ullam quisquam, quo ratione rerum quasi molestias
				commodi ipsam, autem atque optio laboriosam rem dolore! A, tenetur!
			</Description>
			<RatioForm
				ratioLongSymbol={ratioLongSymbol}
				setRatioLongSymbol={setRatioLongSymbol}
				ratioShortSymbol={ratioShortSymbol}
				setRatioShortSymbol={setRatioShortSymbol}
				setChartData={setChartData}
			/>
			<Container></Container>
		</Wrapper>
	);
};

export default Ratio;
