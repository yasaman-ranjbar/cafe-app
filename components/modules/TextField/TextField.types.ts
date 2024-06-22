import { ChangeEvent } from "react";

export type TextFieldProps = Partial<HTMLInputElement> & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    variant: "yellow" | "gray";
    bgVariant: "brown" | "primary-light";
}

export type TextareaProps = Partial<HTMLTextAreaElement> & {
  placeholder: string;
  variant: "yellow" | "gray";
  bgVariant: "brown" | "primary-light";
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};
