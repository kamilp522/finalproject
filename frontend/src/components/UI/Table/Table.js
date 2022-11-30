import styled from "styled-components";

import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";
import * as font_families from "../../variables/font-families";

export const Table = styled.table`
  border-collapse: collapse;
  margin: 1.5em 0;
  font-size: ${font_sizes.fs_350};
  font-family: ${font_families.ff_logo};
  min-width: 300px;
`;

export const TableHead = styled.thead`
  & tr {
    background-color: ${colors.clr_blue_400};
    font-weight: 700;
    text-align: left;
  }
`;

export const Head = styled.th`
  padding: 0.5em 0.75em;

  &:first-of-type {
    border-top-left-radius: 0.5rem;
  }

  &:last-of-type {
    border-top-right-radius: 0.5rem;
  }
`;

export const TableBody = styled.tbody`
  & tr {
    border-bottom: 1px solid ${colors.clr_cream_900};
  }

  & tr:nth-of-type(even) {
    background-color: ${colors.clr_cream_300};
  }

  & tr:last-of-type {
    border-bottom: 3px solid ${colors.clr_cream_900};
  }
`;

export const Row = styled.tr``;

export const Data = styled.td`
  padding: 0.5em 0.75em;
`;
