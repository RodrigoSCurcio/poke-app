import styled from "styled-components";
import { colors } from "../../constants";

export const LoginStyle = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.red};
`;

export const LoginBox = styled.div`
  width: 100%;
  padding: 15px 5px;
  background: linear-gradient(90deg, ${colors.fire}, ${colors.poison});

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
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;

export const Link = styled.div`
  margin-top: 10px;
  a {
    color: ${colors.black};
    font-weight: bold;

    :hover {
      color: ${colors.white};
    }
  }
`;

export const BoxBase = styled.span`
  margin-top: 2em;
  color: ${colors.white};
`;
