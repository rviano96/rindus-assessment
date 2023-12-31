import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
  justify-content: space-evenly;
`;

export const WeatherIcon = styled.img`
  width: 50px;
`;

export const SpanContainer = styled.span<{
  $secondary?: boolean;
  $marginright?: string;
  $marginleft?: string;
}>`
  font-size: 24px;
  color: ${(props) =>
    props.$secondary ? "var(--color-dark-gray)" : "var(--color-black)"};
  margin-left: ${(props) => (props.$marginleft ? props.$marginleft : "0px")};
  margin-right: ${(props) => (props.$marginright ? props.$marginright : "0px")};
`;

export const MaxMinContainer = styled.span`
  display: flex;
  justify-content: center;
`;
