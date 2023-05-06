// React
import { useCallback, useEffect, useState } from "react";
// Libs
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { onAuthStateChanged, signOut } from "firebase/auth";
// Styles
import * as S from "./style";
// Auth
import { auth } from "../../firebase";
// Atoms
import { userAuthAtom } from "../../jotai/authUser/atoms";
// Img
import loadingImg from "../../assets/loading.gif";
// Components
import { Button } from "../Button";

export function Header() {
  const location = useLocation();
  const userAuth = useAtomValue(userAuthAtom);
  const setAuthUser = useSetAtom(userAuthAtom);

  const [loading, setLoading] = useState(true);

  const loggout = useCallback(async () => {
    await signOut(auth);
    setAuthUser({
      uid: "",
      email: "",
      emailVerified: false,
      isAnonymous: false,
      providerData: [
        {
          providerId: "",
          uid: "",
          displayName: "",
          email: "",
          phoneNumber: "",
          photoURL: "",
        },
      ],
    });
  }, [setAuthUser]);

  useEffect(() => {
    (async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
          setLoading(false);
        } else {
          loggout();
          setLoading(false);
        }
      });
    })();
  }, [loggout, setAuthUser]);

  if (location.pathname === "/login" || location.pathname === "/cadastro") {
    return null;
  }

  return (
    <S.HeaderStyle>
      <S.Menu>
        <BiMenuAltLeft size={25} />
      </S.Menu>
      {!userAuth.email ? (
        <Link to="/login">
          <Button type="button">
            {loading ? <img src={loadingImg} width={10} alt="loading" /> : "Login"}
          </Button>
        </Link>
      ) : (
        <Button
          type="button"
          onClick={() => {
            loggout();
          }}
        >
          Sair
        </Button>
      )}

      <S.Circle>
        <S.InnerCircle />
      </S.Circle>
    </S.HeaderStyle>
  );
}
