import * as S from "./style";

import notFound from "../../assets/pikachuSurprised.png";
import { Link } from "react-router-dom";

export function Error() {
  return (
    <S.ErrorStyle>
      <S.ErrorContainer>
        <div>
          <h1>404</h1>
          <h2>Página não encontrada :(</h2>
        </div>
        <Link to="/">
          <S.Img src={notFound} alt="page not found" />
        </Link>
      </S.ErrorContainer>
    </S.ErrorStyle>
  );
}
