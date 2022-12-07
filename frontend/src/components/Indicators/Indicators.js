import React from "react";
import { useState, useEffect } from "react";

import * as colors from "../variables/colors";
import { optionsAdjustMinValue } from "../../helpers/optionsAdjustMinValue";

import indicatorService from "../../services/indicators";

import Chart from "../Chart/Chart";
import { options } from "../Chart/chart_options";
import { latest_content } from "./content";

import { Indicator } from "./IndicatorsElements";

import { Container } from "../UI/Container/Container";
import { Description, H2 } from "../UI/Text/Text";
import { Wrapper } from "../UI/Wrapper/Wrapper";

const Indicators = () => {
	const [dataMPMI, setDataMPMI] = useState({ labels: null, datasets: null });
	const [dataSPMI, setDataSPMI] = useState({ labels: null, datasets: null });
	const [dataMichigan, setDataMichigan] = useState({
		labels: null,
		datasets: null,
	});

	useEffect(() => {
		indicatorService
			.getIndicatorChartParams(indicatorService.getDataManPMI)
			.then((response) => {
				setDataMPMI({
					labels: response.labels,
					datasets: [
						{ data: response.values, backgroundColor: colors.clr_violet_800 },
					],
				});
			});
	}, []);

	useEffect(() => {
		indicatorService
			.getIndicatorChartParams(indicatorService.getDataNonManPMI)
			.then((response) => {
				setDataSPMI({
					labels: response.labels,
					datasets: [
						{ data: response.values, backgroundColor: colors.clr_violet_800 },
					],
				});
			});
	}, []);

	useEffect(() => {
		indicatorService
			.getIndicatorChartParams(indicatorService.getDataMichiganSentiment)
			.then((response) => {
				setDataMichigan({
					labels: response.labels,
					datasets: [
						{ data: response.values, backgroundColor: colors.clr_violet_800 },
					],
				});
			});
	}, []);

	return (
		<Wrapper>
			<Container>
				<H2>Leading Indicators</H2>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem, alias? Voluptatibus atque ipsam quos nam pariatur
					nulla provident laboriosam porro minus placeat beatae dolores debitis
					eligendi, dolorem, ut nobis tempore?
				</Description>
				<Indicator>
					{dataMPMI.datasets ? (
						<Chart
							title={latest_content.manufacturing_pmi.title}
							interpretation={latest_content.manufacturing_pmi.interpretation}
							options={optionsAdjustMinValue(options, dataMPMI)}
							data={dataMPMI}
							type="bar"
						/>
					) : (
						<div></div>
					)}
				</Indicator>
				<Indicator>
					{dataSPMI.datasets ? (
						<Chart
							title={latest_content.non_manufacturing_pmi.title}
							interpretation={
								latest_content.non_manufacturing_pmi.interpretation
							}
							options={optionsAdjustMinValue(options, dataSPMI)}
							data={dataSPMI}
							type="bar"
						/>
					) : (
						<div></div>
					)}
				</Indicator>
				<Indicator>
					{dataMichigan.datasets ? (
						<Chart
							title={latest_content.michigan_sentiment.title}
							interpretation={latest_content.michigan_sentiment.interpretation}
							options={optionsAdjustMinValue(options, dataMichigan)}
							data={dataMichigan}
							type="bar"
						/>
					) : (
						<div></div>
					)}
				</Indicator>
			</Container>
		</Wrapper>
	);
};

export default Indicators;
