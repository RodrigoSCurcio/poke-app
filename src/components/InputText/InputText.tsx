import { useState, useCallback } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillEyeInvisible, AiFillEye, AiOutlineUser } from "react-icons/ai";

import { IInput } from "./interface";
import * as S from "./style";

export function InputText({
  onChange,
  placeholder,
  password,
  search,
  user,
  styleType = "none",
  type,
}: IInput) {
  const [seePassword, setSeePassword] = useState(false);

  const toggleSeePassword = useCallback(() => {
    setSeePassword((prevState) => !prevState);
  }, []);

  return (
    <S.InputStyle styleType={styleType}>
      {search && <BiSearchAlt2 size={20} />}
      {user && <AiOutlineUser size={20} />}
      {password && (
        <div onClick={() => toggleSeePassword()}>
          {seePassword ? (
            <AiFillEye size={20} />
          ) : (
            <AiFillEyeInvisible size={20} />
          )}
        </div>
      )}
      <S.Input
        type={
          password && seePassword
            ? "text"
            : password && !seePassword
            ? "password"
            : type
        }
        onChange={onChange}
        placeholder={placeholder}
      />
    </S.InputStyle>
  );
}
