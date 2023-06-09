import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;

  type?: string;
  styleType?: string;

  password?: boolean;
  search?: boolean;
  user?: boolean;
}

export interface IStyle {
  styleType?: string;
}
