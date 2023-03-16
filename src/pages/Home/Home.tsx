import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./style";

import { IPokedex } from "../../interfaces/pokeInterface";
import { IPaginagiton } from "./interface";

import { getFirstGeneration } from "../../services/pokemon";
import { Card } from "../../components/Card";

export function Home() {
  const [pokeList, setPokeList] = useState<IPokedex>();
  const [pagination, setPagination] = useState<IPaginagiton>({
    count: 0,
    next: "",
    previous: "",
    page: 1,
  });

  useEffect(() => {
    (async () => {
      const response = await getFirstGeneration();
      if (response && response.status === 200) {
        setPokeList(response.data);
        setPagination({
          ...pagination,
          count: response.data.count,
          next: response.data.next,
          previous: response.data.previous,
        });
      } else {
        toast.error("Erro ao buscar dados no banco.");
      }
    })();
  }, []);

  return (
    <S.HomeStyle>
      {pokeList ? (
        pokeList.results.map((pokemon, index) => {
          return <Card key={index} pokemon={pokemon} />;
        })
      ) : (
        <strong>Error</strong>
      )}
    </S.HomeStyle>
  );
}
