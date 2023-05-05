import { IButton } from "./interface";
import { ButtonStyle } from "./style";

export function Button({ children, styleType = "none", ...rest }: IButton) {
  return <ButtonStyle styleType={styleType} {...rest}>{children}</ButtonStyle>;
}
