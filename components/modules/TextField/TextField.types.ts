import { ChangeEvent } from "react";

export type TextFieldProps = Partial<HTMLInputElement> & {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  variant: "yellow" | "gray";
  bgVariant: "brown" | "primary-light";
  error?: string;
  label?: string;
};

export type TextareaProps = Partial<HTMLTextAreaElement> & {
  placeholder: string;
  variant: "yellow" | "gray";
  bgVariant: "brown" | "primary-light";
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  error?: string;
};
