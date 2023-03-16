import { IPokedex, IPokemon } from "../interfaces/pokeInterface";
import { DevelopersPokemon } from "./api";

export const getFirstGeneration = async (offset: number) => {
  const response = await DevelopersPokemon.get<IPokedex>(
    `pokemon/?limit=${offset === 144 ? 7 : 9}&offset=${offset}`
  ).catch();
  if (response) {
    const data = { data: response.data, status: response.status };
    return data;
  }
};

export const getPokemon = async (pokemon: string) => {
  const response = await DevelopersPokemon.get<IPokemon>(
    `pokemon/${pokemon}`
  ).catch();
  if (response) {
    const data = { data: response.data, status: response.status };
    return data;
  }
};
