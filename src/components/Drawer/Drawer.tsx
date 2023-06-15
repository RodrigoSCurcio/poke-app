import { useAtomValue } from "jotai";
import * as S from "./style";
import { RiCloseLine } from "react-icons/ri";
// import { userAuthAtom } from "../../jotai/authUser/atoms";
import { IDrawer } from "./interface";
import userPhoto from "../../assets/user.png";
import { Button } from "../Button";
import { teamAtom } from "../../jotai/pokeTeam/atoms";
import { PokeInfo } from "../PokeInfo";

export function Drawer({ setOpen }: IDrawer) {
  // const userAuth = useAtomValue(userAuthAtom);
  const team = useAtomValue(teamAtom);

  console.log(team);

  return (
    <S.Overlay>
      <S.DrawerStyle>
        <S.HeaderDrawer>
          <button type="button" onClick={() => setOpen(false)}>
            <RiCloseLine size={25} />
          </button>
        </S.HeaderDrawer>
        <S.DrawerBody>
          <img src={userPhoto} alt="userPicture" />
          <Button styleType="medium" appearance="link">
            Alterar foto
          </Button>
          <S.Team>
            <span>Equipe:</span>
            {team.pokemons.map((pokemon) => {
              return <PokeInfo name={pokemon.pokemon} key={pokemon.id} />;
            })}
          </S.Team>
        </S.DrawerBody>
      </S.DrawerStyle>
    </S.Overlay>
  );
}
