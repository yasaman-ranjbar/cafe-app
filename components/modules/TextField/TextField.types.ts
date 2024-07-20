import { ChangeEvent, InputHTMLAttributes } from "react";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
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
