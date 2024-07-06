export type DropdownProps = {
  hasHeader?: boolean;
  hasFooter: boolean;
  headerTitle?: string;
  footerTitle?: string;
  title: React.ReactNode;
  items: DropDownItems[];
  footerHandler?: () => void;
  img?: string;
};

export type DropDownItems = {
  title: string;
  link: string;
};
