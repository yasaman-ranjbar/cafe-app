import { useEffect, useRef, useState } from "react";
import { NavbarProps } from "./navbar.types";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import DropDown from "../Dropdown/DropDown";
import { DropDownItems } from "../Dropdown/dropdown.types";
import { getMe, logout } from "@/services/requests/auth";
import { useCard } from "@/store/card-store";
import Drawer from "../Drawer/Drawer";
import CartDrawer from "@/components/templates/Cart/CartDrawer";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

interface UserProps {
  firstname: string;
  lastname: string;
  role: string;
  _id: string;
}

function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const link = useRef<any>(null);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showViewPort, setShowViewPort] = useState(false);
  const [user, setUser] = useState<UserProps>();
  const [isOpen, setIsOpen] = useState(false);
  const [userAgent, setUserAgent] = useState<string>("");

  const cards = useCard((state) => state.cards);

  const pathName = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowViewPort(true);
      } else {
        setShowViewPort(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await getMe();
        if (res.status === 200) {
          setIsLoggedIn(true);
          setUser(res.data.data);
        }
        if (res.status === 401) {
        }
      } catch (error) {
        //
      }
    };
    checkLogin();
  }, [isLoggedIn, router]);

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

  const dropdownItem: DropDownItems[] = [
    { title: "dashboard", link: "/dashboard" },
    { title: "Profile", link: "/profile" },
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



  const logoutHandler = async () => {
    const res = await logout();
    if (res.status === 200) {
      router.push("/login");
    }
    setIsLoggedIn(false);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(window.navigator.userAgent);
    }
  }, []);

  return (
    <div className="sticky top-0 z-[999] bg-darkGray w-full">
      <div
        className={`${
          showViewPort ? "bg-brown/90" : ""
        } transition ease-in-out py-6 px-4 md:px-12 flex justify-between items-center w-full absolute`}
      >
        {userAgent.includes("Mobile") ? (
          <MobileNavbar />
        ) : (
          <DesktopNavbar
            user={user}
            menu={menu}
            logoutHandler={logoutHandler}
            isLoggedIn={isLoggedIn}
            dropdownItem={dropdownItem}
            cards={cards}
            toggleDrawer={toggleDrawer}
            isOpen={isOpen}
            link={link}
            pathName={pathName}
            toggleSubmenu={toggleSubmenu}
            showSubmenu={showSubmenu}
          />
        )}
      </div>
    </div>
  );
}
export default Navbar;
