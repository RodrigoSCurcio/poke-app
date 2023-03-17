export interface IInput {
  onChange: (e) => void;
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
