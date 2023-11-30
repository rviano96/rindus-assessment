import styled from "styled-components";

export const AdditionalInfoContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 200px;
  width: 50%;
  margin-left: 0.5rem;
`;

export const HourlyContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  height: 125px;
  border-radius: 9px;
  box-shadow: 1px 1px 7px 5px rgba(0, 0, 0, 0.2);
`;

export const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  justify-content: space-around;
`;

export const Top = styled.span`
  display: flex;
  justify-content: center;
`;

export const Bottom = styled.span`
  display: flex;
  justify-content: space-around;
`;

export const Medium = styled.span`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 125px;
  border-radius: 9px;
  box-shadow: 1px 1px 7px 5px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  justify-content: space-evenly;
`;
