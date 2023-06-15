import { IPokeInfo } from "./interface";
import { PokeInfoStyle } from "./style";

export const PokeInfo = ({ name }: IPokeInfo) => {
  return <PokeInfoStyle>{name}</PokeInfoStyle>;
};
