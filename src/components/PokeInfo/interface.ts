import { IType } from "../../interfaces/pokeInterface";

export interface IPokeInfo {
  name: string;
  id: string;
}

export interface IPokeInfoStyle {
  types?: Array<IType>;
}
