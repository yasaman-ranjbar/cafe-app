import { DropdownProps } from "./dropdown.types";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import Link from "next/link";

const DropDown: React.FC<DropdownProps> = ({
  items,
  title,
  hasHeader = false,
  hasFooter = false,
  headerTitle,
  footerTitle,
  footerHandler,
}) => {
  return (
    <Menu as="div">
      <MenuButton className="text-white">{title}</MenuButton>
      <MenuItems anchor="bottom" className="z-50 bg-white py-4 w-[200px]">
        {hasHeader && (
          <MenuItem>
            <p className="px-4 border-b border-gray/80 pb-4">{headerTitle}</p>
          </MenuItem>
        )}

        {items.map((item) => (
          <MenuItem key={item.title}>
            <Link
              className="flex flex-col px-4"
              href={item.link}
            >
              <p className="py-2">{item.title}</p>
            </Link>
          </MenuItem>
        ))}
        <MenuSeparator as="div" className="border-b border-gray/70" />

        {hasFooter && (
          <MenuItem>
            <button onClick={footerHandler} className="flex flex-col px-4 pt-4">
              {footerTitle}
            </button>
          </MenuItem>
        )}
      </MenuItems>
    </Menu>
  );
};

export default DropDown;
