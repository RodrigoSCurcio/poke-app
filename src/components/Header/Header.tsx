import { BiMenuAltLeft } from "react-icons/bi";
import { Button } from "../Button";

import * as S from "./style";

export function Header() {
  return (
    <S.HeaderStyle>
      <S.Menu>
        <BiMenuAltLeft color="#000" size={25} />
      </S.Menu>
      <Button>Login</Button>
      <S.Circle>
        <S.InnerCircle />
      </S.Circle>
    </S.HeaderStyle>
  );
}
