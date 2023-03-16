import { BiSearchAlt2 } from "react-icons/bi";

import { IInput } from "./interface";
import * as S from "./style";

export function InputText({ onChange, placeholder }: IInput) {
  return (
    <S.InputStyle>
      <BiSearchAlt2 size={20} />
      <S.Input type="text" onChange={onChange} placeholder={placeholder} />
    </S.InputStyle>
  );
}
