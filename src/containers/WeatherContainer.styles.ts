import { IoMdCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-lightest-gray);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 1rem;
  position: relative;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-lighter-gray);
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  position: relative;
`;

export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const CloseIcon = styled(IoMdCloseCircleOutline)`
  cursor: pointer;
`;

export const Dropdown = styled.div<{
  $visible?: boolean;
}>`
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  background-color: var(--color-white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-lighter-gray);
  border-radius: 5px;
  z-index: 1;
  display: ${(props) => (props.$visible ? "block" : "none")};
  height: 200px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Item = styled.div`
  padding: 8px 0 8px 0;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: var(--color-extra-light-gray);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ForecastHourlyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
