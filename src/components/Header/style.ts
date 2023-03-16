import styled from "styled-components";
import { colors } from "../../constants";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  height: 120px;
  background-color: ${colors.red};

  padding: 10px;

  border-bottom: 3px solid;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: ${colors.black};

  width: 30px;
  height: 30px;
  border-radius: 100%;

  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${colors.black};
    color: ${colors.white};
    transition: all 0.5s;
  }
`;

export const Circle = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;

  left: 0;
  right: 0;
  top: 65px;

  width: 100px;
  height: 100px;

  background-color: ${colors.white};

  border: 3px solid;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerCircle = styled.hr`
  background: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 50px;
  height: 50px;

  border-radius: 100%;
  border: none;
`;
