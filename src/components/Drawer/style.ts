import styled, { keyframes } from "styled-components";
import { colors } from "../../constants";

const OpenDrawer = keyframes`
  from {
    left: -300px;
  }
  to {
    left: 0px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: ${colors.light_black};

  animation-name: ${OpenDrawer};
  animation-duration: 1s;
  animation-delay: 0s;

  z-index: 1;
`;

export const DrawerStyle = styled.div`
  z-index: 1;

  background: ${colors.water};

  width: 350px;
  height: 100vh;
  padding: 5px;

  border-right: 3px solid #000;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  color: ${colors.white};

  @media (max-width: 425px) {
    width: 100%;

    border: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const HeaderDrawer = styled.div`
  padding: 5px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${colors.water};
    height: 25px;
    width: 25px;

    margin-left: auto;

    cursor: pointer;

    border: none;
    border-radius: 100%;

    color: ${colors.dragon};

    :hover {
      background-color: ${colors.black};
      color: ${colors.dragon};
      transition: all 0.5s;
    }
  }
`;

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2em;

  button {
    margin-top: 1em;
  }

  @media (max-width: 425px) {
    margin-top: 0;
  }
`;

export const Img = styled.img`
  height: 200px;
  width: 200px;

  border-radius: 100%;
  border: 2px solid ${colors.white};

  @media (max-width: 425px) {
    height: 130px;
    width: 130px;
  }
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1em;
  padding: 5px;

  width: 300px;
  height: 440px;

  border-radius: 15px;
  border: 1px solid;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  background-color: ${colors.light_black};

  span {
    width: 100%;
    margin-bottom: 6px;
    text-align: center;

    color: ${colors.gray};
    font-weight: 700;
  }

  span:last-child {
    margin-top: auto;
  }

  @media (max-width: 425px) {
    margin-top: 0.4em;
    height: 435px;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  :hover {
    color: ${colors.black};
    transition: all 0.5s;
  }
`;
