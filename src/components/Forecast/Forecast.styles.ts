import styled from "styled-components";

export const ForecastContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  flex: 1 0 45%;
  max-width: 45%;
  @media (max-width: 780px) {
    max-width: 100%;
  }
`;

export const DayForecast = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const DayContainer = styled.span`
  display: flex;
  justify-content: center;
  width: 25%;
`;

export const TempContainer = styled.span`
  display: flex;
  justify-content: space-around;
  width: 33%;
`;

export const MaxContainer = styled.span`
  display: flex;
  justify-content: center;
  width: 33%;
  flex-direction: column;
`;

export const MiddleContainer = styled.span`
  width: 75%;
  border: 1px solid var(--color-light-gray);
  box-sizing: border-box;
  margin: auto;
`;

export const MinContainer = styled.span`
  display: flex;
  justify-content: center;
  width: 33%;
  flex-direction: column;
`;

export const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  width: 42%;
`;
