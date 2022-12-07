import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

export const Description = styled.p`
	font-size: ${font_sizes.fs_450};
	margin-block: 1em;
	padding-bottom: 1em;
`;

export const H2 = styled.h2`
	font-size: ${font_sizes.fs_600};
	border-bottom: 2px solid ${colors.clr_violet_400};
	padding-bottom: 0.25em;
	margin-bottom: 0.5em;
	font-weight: 700;
`;
