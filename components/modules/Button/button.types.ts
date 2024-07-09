import { BaseComponentsProps } from "@/types/base.types";
import { ButtonProps } from "@headlessui/react";

export type ComponentButtonProps = BaseComponentsProps & ButtonProps & {
    children: React.ReactNode;
  };
