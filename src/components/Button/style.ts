import styled from "styled-components";
import { colors } from "../../constants";

export const ButtonStyle = styled.button`
  width: 100px;
  height: 32px;

  border-radius: 4px;
  border: 2px solid ${colors.black};

  font-weight: bold;
  text-transform: uppercase;

  background-color: ${colors.white};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    color: ${colors.white};
    background-color: black;
  }
`;
