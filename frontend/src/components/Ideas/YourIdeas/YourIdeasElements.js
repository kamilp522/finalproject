import styled from "styled-components";
import * as colors from "../../variables/colors";
import * as font_sizes from "../../variables/font-sizes";

export const Idea = styled.div`
  padding: 0.5em;
  margin-bottom: 1em;
  font-size: ${font_sizes.fs_400};
  border: 1px solid ${colors.clr_violet_400};
  border-radius: 0.5rem;

  &:first-child {
    margin-top: 1.5em;
  }
`;

export const IdeaSymbols = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0.25em;
`;

export const IdeaSymbol = styled.h4`
  margin-right: 1em;
  padding-block: 0.5em;
  font-size: ${font_sizes.fs_500};
`;

export const IdeaBold = styled.span`
  font-weight: 700;
`;

export const IdeaArguments = styled.p`
  font-size: ${font_sizes.fs_400};
  padding: 0.25em 0.125em 0.75em;
  word-wrap: break-word;
`;
