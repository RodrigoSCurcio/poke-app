import styled from "styled-components";
import { colors } from "../../constants";

export const InputStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 1em;
  padding: 5px;

  width: 250px;

  border: 2px solid ${colors.black};
  border-radius: 4px;

  background-color: transparent;

`;

export const Input = styled.input`
  border: none;
  margin-left: 5px;
  outline: none;

  font-weight: bold;
  font-size: 16px;
`;
