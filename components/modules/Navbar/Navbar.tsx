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
  const [isScrolled, setIsScrolled] = useState(false);

  const cards = useCard((state) => state.cards);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center transition-all duration-500 ease-in-out">
        {/* Logo or Brand */}
        <div
          className={`text-xl font-bold transform transition-transform duration-500 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          Logo
        </div>

        {/* Search Box */}
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isScrolled ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          <input
            type="text"
            className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Search..."
          />
        </div>

        {/* Menu */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <a
                href="#home"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
