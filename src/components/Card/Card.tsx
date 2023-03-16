import { useEffect, useState } from "react";

import * as S from "./style";

import { imageTreatment } from "../../helpers";
import { getPokemon } from "../../services/pokemon";

import { IPokemon } from "../../interfaces/pokeInterface";
import { ICard } from "./interface";

import loadingGif from "../../assets/loading.gif";
import errorImg from "../../assets/pikachuError.png";

export function Card({ pokemon }: ICard) {
  const [pokemonData, setPokemonData] = useState<IPokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

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

  if (pokemonData && !loading) {
    return (
      <S.CardContainer types={pokemonData.types}>
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