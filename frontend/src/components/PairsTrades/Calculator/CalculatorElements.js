import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

export const CalculatorContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > span {
		align-self: center;
		margin-top: 4rem;
	}
`;
