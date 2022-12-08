import styled from "styled-components";
import * as colors from "../variables/colors";
import * as font_sizes from "../variables/font-sizes";

import { Bar, Line } from "react-chartjs-2";

export const ChartContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 100%;
	margin-bottom: 2em;
`;

export const ChartH3 = styled.h3`
	font-size: ${font_sizes.fs_550};
	padding-block: 0.5em;
	border-bottom: 1px solid ${colors.clr_blue_400};
`;

export const ChartTimeButton = styled.button`
	width: 25%;
	padding: 0.5em 1em;
	background-color: ${colors.clr_blue_400};
	border: 1px solid ${colors.clr_cream_900};
	border-radius: 0.25rem;
	cursor: pointer;

	&:hover {
		background-color: ${colors.clr_violet_300};
	}
`;

export const ChartText = styled.p`
	font-size: ${font_sizes.fs_450};
	color: ${colors.clr_very_dark_blue_900};
	padding-block: 0.75em;
`;

export const BarChart = styled(Bar)`
	padding-bottom: 0.5em;
`;

export const LineChart = styled(Line)`
	padding-bottom: 0.5em;
`;

export const ChartButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 0.5em;
	margin-bottom: 1em;
`;

export const Select = styled.select`
	margin-right: auto;
	padding: 0.5em 1em;
	margin-top: 0.5em;
	margin-bottom: 1em;
	cursor: pointer;
	border-radius: 0.25em;
`;
