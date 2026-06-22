import { useEffect, useState } from "react";
import { NavbarProps } from "./navbar.types";
import Link from "next/link";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);


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


    const menu: NavbarProps[] = [
        { key: "1", title: "Home", link: "/", isSubmenu: false },
        { key: "2", title: "About", link: "/about", isSubmenu: false },
        { key: "3", title: "Services", link: "/services", isSubmenu: false },
        { key: "4", title: "Menu", link: "/menu", isSubmenu: false },
        { key: "4", title: "Reservations", link: "/reservation", isSubmenu: false },
        { key: "4", title: "Testimonial", link: "/testimonial", isSubmenu: false },
        { key: "6", title: "Contact", link: "/contact", isSubmenu: false },
    ];

    return (
        <header
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out bg-black/50 text-white ${
                isScrolled ? "bg-white text-primary shadow-lg py-2" : "bg-transparent py-4 "
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center transition-all duration-500 ease-in-out">
                {/* Logo or Brand */}
                <div
                    className={`text-xl font-bold transform transition-transform duration-500 ${
                        isScrolled ? "scale-90" : "scale-100"
                    }`}
                >
                    COFFEE APP
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
                        {menu.map((item) => (
                            <li key={item.key}>
                                <Link
                                    href={item.link}
                                    className="hover:text-blue-500 transition-colors duration-300"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;
