// React
import { useEffect, useState, useCallback } from "react";
// Libs
import { useAtomValue } from "jotai";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { RiCloseLine } from "react-icons/ri";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
// Styles
import * as S from "./style";
// Auth
import { auth } from "../../firebase";
// Atoms
import { teamAtom } from "../../jotai/pokeTeam/atoms";
import { userAuthAtom } from "../../jotai/authUser/atoms";
// Interfaces
import { IDrawer } from "./interface";
// Img
import userPhoto from "../../assets/user.png";
// Components
import { PokeInfo } from "../PokeInfo";

export function Drawer({ setOpen }: IDrawer) {
  const userAuth = useAtomValue(userAuthAtom);
  const team = useAtomValue(teamAtom);
  const storage = getStorage();

  const [photoData, setPhotoData] = useState<File | null>(null);
  const [photo, setPhoto] = useState<string>(
    userAuth.photoURL ? userAuth.photoURL : userPhoto
  );

  const uploadPhoto = useCallback(
    async (file: File) => {
      if (auth.currentUser) {
        const fileRef = ref(storage, auth.currentUser.uid + file.name);

        await uploadBytes(fileRef, file)
          .then(() => {
            setPhotoData(null);
          })
          .catch((error) => {
            toast.error("Erro ao enviar foto.");
            console.log(error);
          });

        const response = await getDownloadURL(fileRef);
        if (response) {
          updateProfile(auth.currentUser, { photoURL: response })
            .then(() => {
              toast.success("Foto atualizada com sucesso.");
              setPhoto(response);
            })
            .catch((error) => {
              toast.error("Erro ao atualizar foto.");
              console.log(error);
            });
        }
      }
    },
    [storage]
  );

  useEffect(() => {
    if (photoData) {
      uploadPhoto(photoData);
    }
  }, [photoData, uploadPhoto]);

  return (
    <S.Overlay>
      <S.DrawerStyle>
        <S.HeaderDrawer>
          <button type="button" onClick={() => setOpen(false)}>
            <RiCloseLine size={25} />
          </button>
        </S.HeaderDrawer>
        <S.DrawerBody>
          <S.Img src={photo} alt="userPicture" />
          <input
            accept=".jpeg, .png, .jpg, .jfif, .heic"
            style={{ display: "none" }}
            id="button-file"
            multiple
            type="file"
            name="inputFile"
            onChange={(e) => {
              if (e.target.files) {
                setPhotoData(e.target.files[0]);
              }
            }}
          />
          <S.Label htmlFor="button-file">Alterar foto</S.Label>
          <S.Team>
            <span>Equipe:</span>
            {team.pokemons.map((pokemon) => {
              return (
                <PokeInfo
                  name={pokemon.pokemon}
                  id={pokemon.id}
                  key={pokemon.id}
                />
              );
            })}

            <span>{team.pokemons.length < 6 && "Equipe incompleta :("}</span>
          </S.Team>
        </S.DrawerBody>
      </S.DrawerStyle>
    </S.Overlay>
  );
}
