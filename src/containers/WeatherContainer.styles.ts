import { IoMdCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #e7e7e7;
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
  width: 100;
  justify-content: flex-end;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  width: 300px;
`;

export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const CloseIcon = styled(IoMdCloseCircleOutline)`
  cursor: pointer;
`;
