import { ChangeEvent } from "react";

export type SearchProps = {
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  searchHandlerWithEnter: (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => void;
  search: string;
  clearSearch: () => void;
  showClearIcon: string
};