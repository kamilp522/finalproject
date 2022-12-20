import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";
import * as font_families from "../../variables/font-families";

import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: ${font_sizes.fs_650};
  font-family: ${font_families.ff_logo};
  font-weight: 700;
`;

export const LogoSpan = styled.span`
  color: ${colors.clr_violet_800};
`;
