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