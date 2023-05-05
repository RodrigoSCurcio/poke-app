import styled from "styled-components";
import { colors } from "../../constants";

export const RegisterStyle = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.light_black};
`;

export const RegisterBox = styled.div`
  width: 100%;
  padding: 15px 5px;
  background: linear-gradient(90deg, ${colors.light_black}, ${colors.poison});

  width: 350px;

  border: 2px solid;
  border-radius: 30px;
  box-shadow: 8px 8px 8px 0px ${colors.light_black};

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const Form = styled.form`
  margin-top: 1.5em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;
