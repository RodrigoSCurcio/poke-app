import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

import * as S from "./style";

import { Card, Pagination } from "../../components";

import { getFirstGeneration } from "../../services/pokemon";
import { IPokedex } from "../../interfaces/pokeInterface";

import loadingGif from "../../assets/loadingHome.gif";
import errorImg from "../../assets/dittoSad.png";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [pokeList, setPokeList] = useState<IPokedex>();

  const pagination = useCallback((offset?: number) => {
    (async () => {
      console.log(offset);

      const response = await getFirstGeneration(offset ? offset : 0);
      if (response && response.status === 200) {
        setPokeList(response.data);

        setLoading(false);
      } else {
        toast.error("Erro ao buscar dados no banco.");
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  useEffect(() => {
    pagination();
  }, [pagination]);

  return (
    <S.HomeStyle>
      {loading && <S.LoadingGif src={loadingGif} alt="loading home" />}

      {pokeList && !loading && (
        <S.Container>
          <S.PokeContainer>
            {pokeList.results.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon} />;
            })}
          </S.PokeContainer>
          <Pagination handleClick={pagination} />
        </S.Container>
      )}

      {error && !loading && (
        <S.ErrorContainer>
          <span>Error ao buscar dados do servidor.</span>
          <S.ErrorImg src={errorImg} alt="error home" />
        </S.ErrorContainer>
      )}
    </S.HomeStyle>
  );
}
