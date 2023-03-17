import * as S from "./style";
import logo from "../../assets/pokeball.png";
import { Button, InputText } from "../../components";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <S.LoginStyle>
      <S.LoginBox>
        <Link to="/">
          <S.Img src={logo} alt="logo" />
        </Link>
        <S.Form>
          <InputText
            user
            placeholder="Usuário"
            onChange={() => {}}
            styleType="login"
          />
          <InputText
            password
            placeholder="Senha"
            onChange={() => {}}
            styleType="login"
          />
          <Button type="button" styleType="login">
            Login
          </Button>
        </S.Form>
        <S.Link>
          <Link to="/cadastro">Registre-se</Link>
        </S.Link>
        <S.BoxBase>@PokeApp</S.BoxBase>
      </S.LoginBox>
    </S.LoginStyle>
  );
}
