import * as S from "./style";
import logo from "../../assets/pokeball.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, InputText } from "../../components";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

export function Register() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [repeatPassword, setRepeatPassword] = useState<string>();

  const [loading, seLoading] = useState(false);

  const navigate = useNavigate();

  const appearance = (status: string) => {
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
        seLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success("Usuário cadastrado com sucesso!");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          })
          .catch((e) => {
            appearance(e.code);
            seLoading(false);
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
            styleType="medium"
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
