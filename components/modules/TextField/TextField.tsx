/* eslint-disable react/display-name */
import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { TextFieldProps, TextareaProps } from "./TextField.types";

export const Textarea = forwardRef(
  (props: TextareaProps, ref: Ref<HTMLTextAreaElement>) => {
    const { placeholder, onChange, variant, bgVariant ,label,error, ...rest } = props;
    return (
      <div>
        {label && <label className="text-primary font-bold">{label}</label>}
        <textarea
          rows={4}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          className={`${
            error
              ? "focus:ring-2 ring-offset-1 ring-offset-red ring-red/30 focus:border-red/35 border border-red"
              : "focus:ring-2 ring-offset-1 ring-offset-yellow ring-yellow/30 focus:border-yellow/35"
          } h-[10rem] rounded-md outline-none border border-${variant} p-6 bg-${bgVariant} w-full `}
          {...(rest as InputHTMLAttributes<HTMLTextAreaElement>)}
        ></textarea>
        {error && <p className="text-red text-sm font-semibold">{error}</p>}
      </div>
    );
  }
);

const TextField = forwardRef(
  (props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
    const { type, name, placeholder, onChange, variant, bgVariant,error,label, ...rest } =
      props;
    return (
      <div>
        {label && (
          <label htmlFor={name} className="text-primary font-bold">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`${
            error
              ? "focus:ring-2 ring-offset-1 ring-offset-red ring-red/30 focus:border-red/35 border border-red"
              : "focus:ring-2 ring-offset-1 ring-offset-yellow ring-yellow/30 focus:border-yellow/35"
          } h-[3.125rem] rounded-md outline-none border border-${variant} p-6 bg-${bgVariant} w-full placeholder:font-semibold `}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={onChange}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
        {error && <p className="text-red text-sm font-semibold">{error}</p>}
      </div>
    );
  }
);

export default TextField;
