// src/types.ts

export type InputMode = "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | undefined;

export interface Field {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  secureTextEntry?: boolean;
  inputMode?: InputMode;
  maxLength: number;
}
