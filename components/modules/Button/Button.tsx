import { Button } from "@headlessui/react";
import { ComponentButtonProps } from "./button.types";

const IButton: React.FC<ComponentButtonProps> = ({
  children,
  variant,
  size,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      className={`${
        variant === "primary" ? "bg-brown text-white" : "bg-yellow text-primary"
      } ${
        size === "large" ? "w-40 h-10" : "w-full"
      } rounded-lg py-3 px-4 text-sm data-[hover]:bg-sky-500 data-[active]:bg-sky-700`}
    >
      {children}
    </Button>
  );
};

export default IButton;
