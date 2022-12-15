import styled from "styled-components";

export const IndicatorsContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    & > div {
      width: 47.5%;
    }
  }
`;

export const Indicator = styled.div`
  margin-bottom: 0.5em;
`;
