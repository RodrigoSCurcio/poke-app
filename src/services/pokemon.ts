import {
  IPokedex,
  IPokemon,
} from "../interfaces/pokeInterface";
import { DevelopersPokemon } from "./api";



export const getFirstGeneration = async () => {
  const response = await DevelopersPokemon.get<IPokedex>(
    `pokemon/?limit=9`
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
