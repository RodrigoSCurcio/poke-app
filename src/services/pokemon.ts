import { IPokedex, IPokemon } from "../interfaces/pokeInterface";
import { PokeApi } from "./api";

export const getPokemonList = async (offset: number) => {
  try {
    const response = await PokeApi.get<IPokedex>(
      `pokemon/?limit=${offset === 144 ? 7 : 9}&offset=${offset}`
    );
    if (response) {
      const data = { data: response.data, status: response.status };
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getPokemon = async (pokemon: string) => {
  try {
    const response = await PokeApi.get<IPokemon>(
      `pokemon/${pokemon}`
    );
    if (response) {
      const data = { data: response.data, status: response.status };
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
