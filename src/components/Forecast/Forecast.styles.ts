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
  width: 50%;
  margin-right: 0.5rem;
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
  justify-content: flex-end;
  width: 33%;
`;

export const MiddleContainer = styled.span`
  width: 25%;
  border: 1px solid var(--color-light-gray);
  box-sizing: border-box;
  margin: auto;
`;

export const MinContainer = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 33%;
`;

export const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  width: 42%;
`;
