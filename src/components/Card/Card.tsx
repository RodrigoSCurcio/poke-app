// React
import { useEffect, useState } from "react";
// Styles
import * as S from "./style";
// Helpers
import { imageTreatment } from "../../helpers";
// Services
import { getPokemon } from "../../services/pokemon";
// Img
import loadingGif from "../../assets/loadingPoke.gif";
import errorImg from "../../assets/pikachuError.png";
// Interfaces
import { IPokemon } from "../../interfaces/pokeInterface";
import { ICard } from "./interface";
// Libs
import { useAtomValue } from "jotai";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
// Firebase
import { db } from "../../firebase";
// Atoms
import { userAuthAtom } from "../../jotai/authUser/atoms";
import { teamAtom } from "../../jotai/pokeTeam/atoms";

export function Card({ pokemon }: ICard) {
  const [pokemonData, setPokemonData] = useState<IPokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const userAuth = useAtomValue(userAuthAtom);
  const team = useAtomValue(teamAtom);

  useEffect(() => {
    (async () => {
      const response = await getPokemon(pokemon.name);
      if (response && response.status === 200) {
        setPokemonData(response.data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    })();
  }, [pokemon]);

  const handleAdd = () => {
    if (team.pokemons.length === 6) {
      return toast.warn(
        "Seu time já esta completo! Caso queira adicionar um novo pokemon remova um pokemon do seu time."
      );
    }
    if (userAuth.email) {
      (async () => {
        await addDoc(collection(db, "team"), {
          user: userAuth.email,
          pokemon: pokemon.name,
        })
          .then(() => {
            toast.success("Pokemon adicionado com sucesso!");
          })
          .catch((error) => {
            toast.error("Não foi possivel adicionar o pokemon a lista.");
            console.log(error);
          });
      })();
    } else {
      toast.warning("É necessário estar logado para prosseguir");
    }
  };

  if (pokemonData && !loading) {
    return (
      <S.CardContainer types={pokemonData.types} onClick={() => handleAdd()}>
        <S.NameBadge>{pokemonData.name}</S.NameBadge>
        <S.PokeInfos>
          <S.ImgContainer>
            <S.Img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageTreatment(
                pokemonData.id.toString()
              )}.png`}
              alt={pokemon.name}
            />
          </S.ImgContainer>
          <S.InfoContainer>
            <S.TypeContainer>
              {pokemonData.types.map((type, index) => {
                return (
                  <S.TypeBadge key={index} type={type.type.name}>
                    {type.type.name}
                  </S.TypeBadge>
                );
              })}
            </S.TypeContainer>
          </S.InfoContainer>
        </S.PokeInfos>
      </S.CardContainer>
    );
  }

  if (error && !loading) {
    return (
      <S.Error>
        <S.ErrorImg src={errorImg} alt="error" />
        <strong>Erro ao buscar dados do pokemon :(</strong>
      </S.Error>
    );
  }

  return (
    <S.Loading>
      <S.LoadingGif src={loadingGif} alt="loading" />
    </S.Loading>
  );
}
