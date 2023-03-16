import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

import * as S from "./style";

import { Card, InputText, Pagination } from "../../components";

import { getPokemonList } from "../../services/pokemon";
import { IPokedex, IPokemonInfos } from "../../interfaces/pokeInterface";

import loadingGif from "../../assets/loadingHome.gif";
import errorImg from "../../assets/dittoSad.png";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [pokeList, setPokeList] = useState<IPokedex>();
  const [search, setSearch] = useState<IPokemonInfos>({
    name: "",
  });

  const getPokes = useCallback((offset?: number) => {
    (async () => {
      const response = await getPokemonList(offset ? offset : 0);
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
    getPokes();
  }, [getPokes]);

  return (
    <S.HomeStyle>
      {loading && <S.LoadingGif src={loadingGif} alt="loading home" />}

      {!loading && !error && (
        <>
          <InputText
            placeholder="Ex: bulbasaur"
            onChange={(e) => setSearch({ ...search, name: e.target.value })}
          />
          {search.name && <Card pokemon={search} />}
        </>
      )}

      {pokeList && !loading && !search.name && (
        <S.Container>
          <S.PokeContainer>
            {pokeList.results.map((pokemon, index) => {
              return <Card key={index} pokemon={pokemon} />;
            })}
          </S.PokeContainer>
          <Pagination handleClick={getPokes} />
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
