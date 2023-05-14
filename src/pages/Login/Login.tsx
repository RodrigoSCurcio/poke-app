// React
import { useState } from "react";
// Libs
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
// Styles
import * as S from "./style";
// Atoms
import { useSetAtom } from "jotai";
import { userAuthAtom } from "../../jotai/authUser/atoms";
// Components
import { Button, InputText } from "../../components";
// Icons
import logo from "../../assets/pokeball.png";
// Auth
import { auth } from "../../firebase";

export function Login() {
  const setAuthUser = useSetAtom(userAuthAtom);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [loading, setLoading] = useState(false);

  const error = (status: string) => {
    switch (status) {
      case "auth/wrong-password":
        return toast.error("Senha inválida.");
      case "auth/user-not-found":
        return toast.error("Email não encontrado.");
      default:
        return toast.error("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  async function login() {
    if (email && password) {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
          toast.success("Login efetuado com sucesso!");
          if (value.user.uid && value.user.email) {
            setAuthUser(value.user);
            setTimeout(() => {
              navigate("/");
            }, 3000);
          } else {
            toast.error("Não foi possivel recuperar os dados do usuário");
          }
        })
        .catch((e) => {
          error(e.code);
          setLoading(false);
        });
    } else {
      toast.warning("Verifique os dados digitados.");
    }
  }

  return (
    <S.LoginStyle>
      <S.LoginBox>
        <Link to="/">
          <S.Img src={logo} alt="logo" />
        </Link>
        <S.Form>
          <InputText
            user
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            styleType="white"
          />
          <InputText
            password
            placeholder="Senha"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            styleType="white"
          />
          <Button
            type="button"
            styleType="large"
            disabled={loading}
            onClick={() => {
              login();
            }}
          >
            {loading ? "Carregando" : "Login"}
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
