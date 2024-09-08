"use client";

import Link from "next/link";
import DropDown from "../Dropdown/DropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "../Drawer/Drawer";
import CartDrawer from "@/components/templates/Cart/CartDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { DesktopNavbarProps } from "./navbar.types";
import Search from "../Search/Search";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Menu, MenuItem } from "@mui/material";

const DesktopNavbar = ({
  isLoggedIn,
  dropdownItem,
  user,
  logoutHandler,
  cards,
  toggleDrawer,
  isOpen,
  menu,
  link,
  pathName,
  toggleSubmenu,
  showSubmenu,
}: DesktopNavbarProps) => {
  const [search, setSearch] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openSubmenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  const searchHandlerWithEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  const searchEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowClearIcon(e.target.value === "" ? "none" : "flex");
  };

  const clearSearch = () => {
    setSearch("");
    setShowClearIcon("none");
    console.log("first")
  };


  return (
    <div className="flex items-center w-full gap-12">
      <div className="flex items-center gap-6 relative">
        <span className="font-bold text-[5px] md:text-[2rem] text-white">
          COFFEE Reservation
        </span>
        <span className="cursor-pointer  ">
          {isLoggedIn ? (
            <DropDown
              items={dropdownItem}
              hasHeader
              headerTitle={user?.firstname + " " + user?.lastname}
              hasFooter
              footerTitle="Logout"
              title={<AccountCircleIcon />}
              footerHandler={logoutHandler}
            />
          ) : (
            <Link href="/login" className="text-white">
              Login
            </Link>
          )}
        </span>
        <span className="cursor-pointer relative ">
          <div className="absolute -top-3 -left-1 bg-yellow size-5 font-bold flex justify-center items-center rounded-full text-primary">
            {cards.length}
          </div>
          <ShoppingCartIcon className="text-white" onClick={toggleDrawer} />
          <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
            <CartDrawer />
          </Drawer>
        </span>
      </div>

      <Search
        search={search}
        searchHandlerWithEnter={searchHandlerWithEnter}
        searchHandler={searchEvent}
        clearSearch={clearSearch}
        showClearIcon={showClearIcon}
      />

      <div className="flex gap-6 items-center">
        {menu.map((item) => (
          <>
            {item.submenu ? (
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={openSubmenu}
                key={item.key}
                className="text-white text-base font-bold capitalize"
              >
                {item.title}
              </Button>
            ) : (
              <Link
                key={item.key}
                href={item.link}
                className={`text-white font-bold text-lg ${
                  item.link === pathName
                    ? "text-yellow"
                    : "text-white hover:text-yellow"
                }`}
              >
                {item.title}
              </Link>
            )}

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {menu.map(
                (item) =>
                  item.submenu &&
                  item.submenu.map((subItem) => (
                    <MenuItem
                      onClick={handleClose}
                      key={subItem.title}
                      className="text-primary text-base"
                    >
                      <Link href={subItem.link}>{subItem.title}</Link>
                    </MenuItem>
                  ))
              )}
            </Menu>
          </>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavbar;
