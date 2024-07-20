import { Select } from "@headlessui/react";
import { SelectBoxProps } from "./SelectBox.types";

const SelectBox: React.FC<SelectBoxProps> = ({
  items,
  name,
  error,
  ...rest
}) => {
  return (
    <Select
      className={`${
        error
          ? "focus:ring-2 ring-offset-1 ring-offset-red ring-red/30 focus:border-red/35 border border-red"
          : "focus:ring-2 ring-offset-1 ring-offset-yellow ring-yellow/30 focus:border-yellow/35"
      } h-[3.125rem] rounded-md outline-none border border-yellow bg-brown px-5 text-white`}
      aria-label="Project status"
      name={name}
      {...rest}
    >
      {items.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
      {error && <p className="text-red text-sm font-semibold">{error}</p>}
    </Select>
  );
};

export default SelectBox;
