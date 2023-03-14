import { ButtonProps } from "./interface";
import { ButtonStyle } from "./style";


export function Button({ children, ...rest}: ButtonProps) {
  return <ButtonStyle>{children}</ButtonStyle>;
}
