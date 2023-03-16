import { IPokemonInfos, IType } from "../../interfaces/pokeInterface";

export interface ICard {
  pokemon: IPokemonInfos;
}

export interface IStyle {
  types: Array<IType>;
}

export interface TPokeType {
  type: string;
}
