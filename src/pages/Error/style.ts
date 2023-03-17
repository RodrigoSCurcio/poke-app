import styled from "styled-components";
import { colors } from "../../constants";

export const ErrorStyle = styled.div`
  padding: 5px 25px;
`;

export const ErrorContainer = styled.div`
  width: 350px;
  text-align: center;

  display: flex;
  align-items: center;

  border-radius: 20px;

  margin-top: 2em;
  padding: 10px;
  gap: 0 8px;

  color: ${colors.white};

  background-color: ${colors.red};
  box-shadow: 0px 4px 4px 0px ${colors.light_black};
`;

export const Img = styled.img`
  max-width: 100px;
  max-height: 100px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
`;
