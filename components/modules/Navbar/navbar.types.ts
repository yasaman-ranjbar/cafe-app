import { DropDownItems } from "../Dropdown/dropdown.types";

export type NavbarProps = {
    key: string;
    title: string;
    link: string;
    isSubmenu: boolean;
    submenu?: SabMenuProps[];
};

export type SabMenuProps = {
    title: string;
    link: string;
};

export type DesktopNavbarProps = {
  menu: NavbarProps[];
  isLoggedIn: boolean;
  dropdownItem: DropDownItems[];
  user: any;
  logoutHandler: () => void;
  cards: any;
  toggleDrawer: () => void;
  isOpen: boolean;
  link: any;
  pathName: string;
  toggleSubmenu: (key: string) => void;
  showSubmenu: boolean;
};