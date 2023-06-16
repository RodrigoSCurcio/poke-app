import styled, { css } from "styled-components";
import { colors } from "../../constants";
import { IPokeInfoStyle } from "./interface";

export const PokeInfoStyle = styled.div<IPokeInfoStyle>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
  padding: 5px;
  /* background-color: ${colors.electric}; */

  height: 60px;

  border: 2px solid #fff;
  border-radius: 8px;

  ${({ types }) =>
    types &&
    css`
      background-color: ${colors[types[0].type.name as keyof typeof colors]};
    `}

  label {
    font-weight: 600;
  }

  label:first-letter {
    text-transform: capitalize;
  }

  button {
    margin: 0;
    background-color: transparent;
    border: none;

    width: 60px;
    height: 40px;

    color: #fff;

    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
`;
