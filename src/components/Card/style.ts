import styled, { css } from "styled-components";

import { colors } from "../../constants";
import { IStyle, TPokeType } from "./interface";

export const CardContainer = styled.div<IStyle>`
  width: 30%;
  height: 250px;
  margin-top: 2em;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border: 2px solid;
  border-radius: 8px;

  cursor: pointer;

  // POKEMON COM 1 TIPO
  ${({ types }) =>
    types.length === 1 &&
    css`
      background-color: ${colors[types[0].type.name as keyof typeof colors]};

      :hover {
        transition: all 0.2s;
        box-shadow: 0px 4px 4px 0px ${colors.light_black};
      }
    `}

  // POKEMON COM 2 TIPOS  
  ${({ types }) =>
    types.length > 1 &&
    css`
      background: linear-gradient(
        90deg,
        ${colors[types[0].type.name as keyof typeof colors]},
        ${colors[types[1].type.name as keyof typeof colors]}
      );

      :hover {
        transition: all 0.2s;
        box-shadow: 0px 4px 4px 0px ${colors.light_black};
        background: linear-gradient(
          90deg,
          ${colors[types[1].type.name as keyof typeof colors]},
          ${colors[types[0].type.name as keyof typeof colors]}
        );
      }
    `}

  @media (max-width: 360px) {
    width: 100%;
    height: 200px;
  }
`;

export const NameBadge = styled.strong`
  background-color: rgba(0, 0, 0, 0.2);
  color: ${colors.gray};

  padding: 2px 5px;

  border: 2px solid ${colors.white};
  border-radius: 9px;
  box-shadow: 0px 4px 4px 0px ${colors.light_black};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const PokeInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  align-items: center;
`;

export const ImgContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  border-radius: 100%;
`;

export const Img = styled.img`
  width: 170px;
  height: 170px;

  @media (max-width: 360px) {
    width: 120px;
    height: 120px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 8px;
`;

export const TypeBadge = styled.div<TPokeType>`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;

  width: 50%;

  border: 2px solid ${colors.white};
  border-radius: 10px;

  ${({ type }) =>
    css`
      background-color: ${colors[type as keyof typeof colors]};
    `}
`;

export const Loading = styled.div`
  width: 30%;
  max-width: 100%;
  height: 250px;
  margin-top: 2em;

  object-fit: cover;
  display: block;

  border-radius: 8px;
  cursor: not-allowed;

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const LoadingGif = styled.img`
  width: 100%;
  max-height: 250px;

  border-radius: 8px;
`;

export const Error = styled.div`
  width: 30%;
  height: 250px;
  margin-top: 2em;

  background: linear-gradient(90deg, ${colors.electric}, ${colors.red});

  border: 3px solid ${colors.electric};
  border-radius: 8px;

  cursor: not-allowed;

  display: flex;
  align-items: center;

  padding: 20px;
  gap: 0 8px;

  text-align: center;
  color: ${colors.white};

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const ErrorImg = styled.img`
  max-width: 100%;
  max-height: 225px;

  background-color: ${colors.electric};

  border-radius: 8px;

  @media (max-width: 360px) {
    max-width: 50%;
  }
`;
