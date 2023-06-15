// React
import { useCallback, useEffect, useState } from "react";
// Libs
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
// Styles
import * as S from "./style";
// Auth
import { auth, db } from "../../firebase";
// Atoms
import { userAuthAtom } from "../../jotai/authUser/atoms";
import { teamAtom } from "../../jotai/pokeTeam/atoms";
// Img
import loadingImg from "../../assets/loading.gif";
// Components
import { Button } from "../Button";
import { Drawer } from "../Drawer";

export function Header() {
  const location = useLocation();
  const userAuth = useAtomValue(userAuthAtom);
  const setAuthUser = useSetAtom(userAuthAtom);
  const setTeam = useSetAtom(teamAtom);

  const [loading, setLoading] = useState(true);
  const [drawer, setDrawer] = useState(false);

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

  useEffect(() => {
    if (userAuth.email) {
      (async () => {
        const teamRef = collection(db, "team");
        onSnapshot(teamRef, (snapshot) => {
          let list: { id: string; pokemon: string; user: string }[] = [];

          snapshot.forEach((team) => {
            if (userAuth.email === team.data().user) {
              list.push({
                id: team.id,
                pokemon: team.data().pokemon,
                user: team.data().user,
              });
            }
          });

          setTeam({ pokemons: list });
        });
      })();
    }
  }, [setTeam, userAuth.email]);

  if (location.pathname === "/login" || location.pathname === "/cadastro") {
    return null;
  }

  return (
    <S.HeaderStyle>
      {userAuth.email && (
        <S.Menu>
          <BiMenuAltLeft size={25} onClick={() => setDrawer(true)} />
        </S.Menu>
      )}

      {drawer && <Drawer setOpen={setDrawer} />}

      <S.Buttons>
        {!userAuth.email ? (
          <Link to="/login">
            <Button type="button">
              {loading ? (
                <img src={loadingImg} width={10} alt="loading" />
              ) : (
                "Login"
              )}
            </Button>
          </Link>
        ) : (
          <Button
            type="button"
            onClick={() => {
              loggout();
            }}
          >
            Loggout
          </Button>
        )}
      </S.Buttons>

      <S.Circle>
        <S.InnerCircle />
      </S.Circle>
    </S.HeaderStyle>
  );
}
