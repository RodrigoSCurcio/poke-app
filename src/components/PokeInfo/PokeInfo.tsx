// React
import { useEffect, useState } from "react";
// Libs
import { deleteDoc, doc } from "firebase/firestore";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";
// Styles
import * as S from "./style";
// Firebase
import { db } from "../../firebase";
// Interfaces
import { IPokeInfo } from "./interface";
import { IPokemon } from "../../interfaces/pokeInterface";
// Services
import { getPokemon } from "../../services/pokemon";

export const PokeInfo = ({ name, id }: IPokeInfo) => {
  const [pokemonData, setPokemonData] = useState<IPokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getPokemon(name);
      if (response && response.status === 200) {
        setPokemonData(response.data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    })();
  }, [name]);

  const removePokemon = async (id: string) => {
    await deleteDoc(doc(db, "team", id))
      .then(() => {
        toast.success("Pokemon removido com sucesso!");
      })
      .catch((error) => {
        toast.error("Não foi possivel remover o pokemon da lista.");
        console.log(error);
      });
  };

  if (loading) {
    return <S.PokeInfoStyle>Carregando</S.PokeInfoStyle>;
  }

  if (error) {
    return <S.PokeInfoStyle>Error</S.PokeInfoStyle>;
  }

  return (
    <S.PokeInfoStyle types={pokemonData?.types}>
      <S.Img src={pokemonData?.sprites.front_default} alt={name} />
      <label>{name}</label>
      <button type="button" onClick={() => removePokemon(id)}>
        <BsTrash size={25} />
      </button>
    </S.PokeInfoStyle>
  );
};
