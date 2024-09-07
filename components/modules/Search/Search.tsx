import SearchIcon from "@mui/icons-material/Search";
import { SearchProps } from "./search.type";
import { FormControl, Input, InputAdornment, TextField } from "@mui/material";

const Search = ({
  searchHandler,
  searchHandlerWithEnter,
  search,
}: SearchProps) => {
  return (
    <div className="md:flex gap-2 items-center relative border-b border-white hidden ">
      {/* <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={searchHandlerWithEnter}
        type="text"
        className=" outline-none bg-transparent  h-10 text-yellow"
        placeholder="Search..."
      /> */}
      {/* <TextField
        placeholder="Search..."
        value={search}
        onKeyDown={searchHandlerWithEnter}
        onChange={(event) => setSearch(event.target.value)}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      /> */}
      <FormControl variant="standard">
        <Input
          placeholder="Search..."
          value={search}
          onKeyDown={searchHandlerWithEnter}
          onChange={searchHandler}
          id="search"
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      {/* <SearchIcon onClick={searchHandler} /> */}
    </div>
  );
};

export default Search;
