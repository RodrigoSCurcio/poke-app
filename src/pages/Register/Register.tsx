// React
import { useState } from "react";
// Libs
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
// Styles
import * as S from "./style";
// Components
import { Button, InputText } from "../../components";
// Auth
import { auth } from "../../firebase";
// Img
import logo from "../../assets/pokeball.png";


export function Register() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [repeatPassword, setRepeatPassword] = useState<string>();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const error = (status: string) => {
    switch (status) {
      case "auth/weak-password":
        return toast.error("A senha deve ter pelo menos 6 caracteres");
      case "auth/email-already-in-use":
        return toast.error("Email já cadastrado no banco.");
      default:
        return toast.error(
          "Erro ao criar usuário. Tente novamente mais tarde."
        );
    }
  };

  async function createUser() {
    if (email && password) {
      if (password === repeatPassword) {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success("Usuário cadastrado com sucesso!");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          })
          .catch((e) => {
            error(e.code);
            setLoading(false);
          });
      } else {
        toast.error("As senhas não coincidem.");
      }
    } else {
      toast.warning("Verifique os dados digitados.");
    }
  }

  return (
    <S.RegisterStyle>
      <S.RegisterBox>
        <Link to="/">
          <S.Img src={logo} alt="logo" />
        </Link>
        <S.Form>
          <InputText
            user
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            styleType="white"
            required
          />
          <InputText
            password
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            styleType="white"
            required
          />
          <InputText
            password
            placeholder="Repita a senha"
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
            styleType="white"
            required
          />
          <Button
            type="button"
            styleType="large"
            onClick={() => {
              createUser();
            }}
            disabled={loading}
          >
            {loading ? "Carregando" : "Cadastrar"}
          </Button>
        </S.Form>
      </S.RegisterBox>
    </S.RegisterStyle>
  );
}
