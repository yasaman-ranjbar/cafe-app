import { useEffect, useRef, useState } from "react";
import { NavbarProps } from "./navbar.types";
import Link from "next/link";

function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

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
    { key: "6", title: "Contact", link: "/", isSubmenu: false },
  ];

  const toggleSubmenu = (key: string) => {
    setShowSubmenu(!showSubmenu);
    setActiveMenu(activeMenu === key ? null : key);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log("event", event.target);
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


  return (
    <div className="p-3 flex justify-between items-center bg-slate-600">
      <div className="font-bold text-lg">COFFEE APPLICATION</div>
      <div className="flex">
        {menu.map((item) => (
          <ul key={item.key}>
            <Link
              id="submenu"
              className={`${
                item.submenu ? "submenu" : ""
              } px-3.5 py-2 relative font-bold text-lg `}
              href={item.isSubmenu ? "#" : item.link}
              onClick={
                item.isSubmenu ? () => toggleSubmenu(item.key) : undefined
              }
            >
              {item.title}
            </Link>
            {showSubmenu && item.submenu && (
              <div ref={ref} className="absolute top-12 bg-red-200 px-3 py-1">
                {item.submenu.map((subItem) => (
                  <Link
                    className="flex flex-col"
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
