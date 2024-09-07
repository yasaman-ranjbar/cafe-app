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
import { useRouter } from "next/router";

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
  };

  return (
    <>
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
        <Search
          search={search}
          searchHandlerWithEnter={searchHandlerWithEnter}
          searchHandler={searchEvent}
        />
      </div>

      <span className="block md:hidden">
        <MenuIcon className=" text-white text-xl font-bold" />
      </span>

      <div className="hidden md:flex">
        {menu.map((item: any) => (
          <ul key={item.key}>
            <Link
              ref={link}
              id="submenu"
              className={`${item.submenu ? "submenu" : ""} ${
                item.link === pathName
                  ? "text-yellow"
                  : "text-white hover:text-yellow"
              } px-3.5 py-2 relative font-bold text-lg  `}
              href={item.isSubmenu ? "" : item.link}
              onClick={
                item.isSubmenu ? () => toggleSubmenu(item.key) : undefined
              }
            >
              {item.title}
            </Link>
            {/* {showSubmenu && item.submenu && (
                <div ref={ref} className="absolute top-[4.5rem] bg-white py-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      className="flex flex-col hover:bg-orange-300 px-3 py-1 font-normal tracking-wider"
                      href={subItem.link}
                      key={subItem.title}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )} */}
          </ul>
        ))}
      </div>
    </>
  );
};

export default DesktopNavbar;
