import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
`;

export const WeatherIcon = styled.img`
  width: 50px;
`;

export const Temperature = styled.span`
  font-size: 24px;
`;

export const WeatherDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

export const ForecastContainer = styled.div`
  margin-top: 16px;
`;

export const ForecastDay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
