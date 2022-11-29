import styled from "styled-components";

import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";
import * as font_families from "../../variables/font-families";

export const Table = styled.table`
  text-align: center;
  border-collapse: separate;
  margin-block: 1em;
  width: 100%;

  & * {
    border: 1px solid black;
    padding: 0.33em;
  }
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
