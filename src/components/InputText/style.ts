import styled, { css } from "styled-components";

import { colors } from "../../constants";
import { IStyle } from "./interface";

export const InputStyle = styled.div<IStyle>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 5px;

  // Padrao
  ${({ styleType }) =>
    styleType === "none" &&
    css`
      margin-top: 1em;

      width: 250px;

      border: 2px solid ${colors.black};
      border-radius: 4px;
    `}

  // Background branco
  ${({ styleType }) =>
    styleType === "white" &&
    css`
      width: 300px;
      height: 40px;

      background-color: ${colors.white};

      border: 2px solid ${colors.black};
      border-radius: 4px;
    `}

  div {
    margin-top: 7px;
  }
`;

export const Input = styled.input<IStyle>`
  border: none;
  margin-left: 5px;
  outline: none;

  font-weight: bold;
  font-size: 16px;

  background-color: transparent;
`;
