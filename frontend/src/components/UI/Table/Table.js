import styled from "styled-components";

import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";
import * as font_families from "../../variables/font-families";

export const Table = styled.table`
  /* border-collapse: collapse; */
  text-align: center;
  width: 100%;
`;

export const TableHead = styled.thead``;

export const Head = styled.th``;

export const TableBody = styled.tbody`
  &:nth-child(even) {
    background-color: ${colors.clr_cream_500};
  }
`;

export const Row = styled.tr``;

export const Data = styled.td``;
