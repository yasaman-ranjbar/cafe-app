import { TextFieldProps } from "./TextField.types";

const TextField: React.FC<TextFieldProps> = ({
  type,
  name,
  placeholder,
  onChange,
}) => {
  return (
      <input
        className="h-[3.125rem] outline-none border border-yellow p-6 bg-brown w-full"
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
      />
  );
};

export default TextField;
