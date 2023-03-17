import { BiMenuAltLeft } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Button";

import * as S from "./style";

export function Header() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/cadastro") {
    return null;
  }

  return (
    <S.HeaderStyle>
      <S.Menu>
        <BiMenuAltLeft size={25} />
      </S.Menu>
      <Link to="/login">
        <Button type="button">Login</Button>
      </Link>
      <S.Circle>
        <S.InnerCircle />
      </S.Circle>
    </S.HeaderStyle>
  );
}
