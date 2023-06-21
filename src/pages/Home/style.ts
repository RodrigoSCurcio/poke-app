import styled from "styled-components";
import { colors } from "../../constants";

export const HomeStyle = styled.div`
  padding: 5px 25px;


  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;

    .input {
      width: 100%;
      margin-top: 35px;

      div {
        width: 100%;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const LoadingGif = styled.img`
  max-width: 250px;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  color: ${colors.white};
  background-color: ${colors.red};
  box-shadow: 0px 4px 4px 0px ${colors.light_black};

  border-radius: 20px;

  margin-top: 2em;
  padding: 10px;
  gap: 0 8px;
`;

export const ErrorImg = styled.img`
  max-width: 80px;
  max-height: 80px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
`;
