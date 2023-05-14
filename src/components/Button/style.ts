import styled, { css } from "styled-components";
import { colors } from "../../constants";
import { IButton } from "./interface";

export const ButtonStyle = styled.button<IButton>`
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
    transition: all 0.5s;

    &:disabled {
      color: ${colors.light_black};
      background-color: ${colors.light_black};
      box-shadow: none;
    }
  }

  &:disabled {
    color: ${colors.light_black};
    background-color: ${colors.light_black};

    cursor: not-allowed;
  }

  ${({ styleType }) =>
    styleType === "none" &&
    css`
      width: 100px;
      height: 32px;
    `}

  ${({ styleType }) =>
    styleType === "medium" &&
    css`
      width: 150px;
      height: 30px;
    `}

  ${({ styleType }) =>
    styleType === "large" &&
    css`
      width: 300px;
      height: 40px;

      background-color: ;
    `}

    ${({ appearance }) =>
    appearance === "link" &&
    css`
      width: 150px;
      background-color: transparent;
      border: none;

      text-decoration: underline;

      :hover {
        background-color: transparent;
        box-shadow: none;
      }
    `}
  
`;
