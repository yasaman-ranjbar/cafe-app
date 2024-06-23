import { ChangeEvent, KeyboardEventHandler, useEffect, useRef, useState } from "react";
import { NavbarProps } from "./navbar.types";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const link = useRef<any>(null);
  const router = useRouter()

  const menu: NavbarProps[] = [
    { key: "1", title: "Home", link: "/", isSubmenu: false },
    { key: "2", title: "About", link: "/about", isSubmenu: false },
    { key: "3", title: "Services", link: "/services", isSubmenu: false },
    { key: "4", title: "Menu", link: "/menu", isSubmenu: false },
    {
      key: "5",
      title: "Pages",
      isSubmenu: true,
      link: "",
      submenu: [
        {
          title: "Reservations",
          link: "/reservation",
        },
        { title: "Testimonial", link: "/testimonial" },
      ],
    },
    { key: "6", title: "Contact", link: "/contact", isSubmenu: false },
  ];

  const toggleSubmenu = (key: string) => {
    setShowSubmenu(!showSubmenu);
    setActiveMenu(activeMenu === key ? null : key);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (event.target as HTMLElement)?.id !== "submenu"
      ) {
        setShowSubmenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const searchHandlerWithEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
    
  }

  return (
    <div className="p-3 flex justify-between items-center absolute z-50 w-full">
      <div className="flex items-center gap-6">
        <span>
          <FontAwesomeIcon
            icon={Icons["faShoppingCart"]}
            className="text-white text-xl font-bold"
          />
        </span>
        <span className="font-bold text-[2rem] text-white">
          COFFEE APPLICATION
        </span>

        <div className="flex gap-2 items-center relative border-b border-white">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={searchHandlerWithEnter}
            type="text"
            className=" outline-none bg-transparent  h-10 text-yellow"
            placeholder="Search..."
          />
          <FontAwesomeIcon
            icon={Icons["faSearch"]}
            className="text-white text-lg font-bold"
            onClick={searchHandler}
          />
        </div>
      </div>
      <div className="flex">
        {menu.map((item) => (
          <ul key={item.key}>
            <Link
              ref={link}
              id="submenu"
              className={`${
                item.submenu ? "submenu" : ""
              } px-3.5 py-2 relative font-bold text-lg text-white hover:text-yellow`}
              href={item.isSubmenu ? "" : item.link}
              onClick={
                item.isSubmenu ? () => toggleSubmenu(item.key) : undefined
              }
            >
              {item.title}
            </Link>
            {showSubmenu && item.submenu && (
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
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Navbar;
