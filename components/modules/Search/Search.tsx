import SearchIcon from "@mui/icons-material/Search";
import { SearchProps } from "./search.type";
import { FormControl, IconButton, Input, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Search = ({
  searchHandler,
  searchHandlerWithEnter,
  search,
  clearSearch,
  showClearIcon,
}: SearchProps) => {
  return (
    <FormControl className="flex-1">
      <TextField
        value={search}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              color: "#fff",
            },
          },
          "& .MuiInputBase-root": {
            color: "#fff",
          },
        }}
        size="small"
        variant="outlined"
        onChange={searchHandler}
        onKeyDown={searchHandlerWithEnter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="text-white" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CloseIcon
                onClick={clearSearch}
                style={{ display: showClearIcon, color: "#fff" }}
              />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default Search;
