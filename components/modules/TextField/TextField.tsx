/* eslint-disable react/display-name */
import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { TextFieldProps, TextareaProps } from "./TextField.types";

export const Textarea = forwardRef(
  (props: TextareaProps, ref: Ref<HTMLTextAreaElement>) => {
    const { placeholder, onChange, variant, bgVariant ,label,error, ...rest } = props;
    return (
      <>
        {label && (
          <label className="text-primary font-bold">
            {label}
          </label>
        )}
        <textarea
          rows={4}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          className={`h-[10rem] outline-none border border-${variant} p-6 bg-${bgVariant} w-full focus:ring-2 ring-offset-1 ring-offset-yellow ring-yellow/30 focus:border-yellow/35`}
          {...(rest as InputHTMLAttributes<HTMLTextAreaElement>)}
        ></textarea>
        {error && <p className="text-red-500">{error}</p>}
      </>
    );
  }
);

const TextField = forwardRef(
  (props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
    const { type, name, placeholder, onChange, variant, bgVariant,error,label, ...rest } =
      props;
    return (
      <>
        {label && (
          <label htmlFor={name} className="text-primary font-bold">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`h-[3.125rem] outline-none border border-${variant} p-6 bg-${bgVariant} w-full focus:ring-2 ring-offset-1 ring-offset-yellow ring-yellow/30 focus:border-yellow/35 `}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={onChange}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
        {error && <p className="text-red-500">{error}</p>}
      </>
    );
  }
);

export default TextField;
