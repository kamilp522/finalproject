import styled from "styled-components";

export const QuoteChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    @media (min-width: 768px) {
      max-width: 60%;
      align-self: center;
    }
  }
`;
