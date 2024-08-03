import { SidebarItem } from "./types";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Sidebar = () => {

    const Items: SidebarItem[] = [
      {
        key: 1,
        title: "Dashboard",
        path: "/dashboard",
        icon: (
          <FontAwesomeIcon icon={Icons["faTh"]} className="text-gray text-xl" />
        ),
      },
      {
        key: 1,
        title: "Add Product",
        path: "/dashboard/add-product",
        icon: (
          <FontAwesomeIcon
            icon={Icons["faPlusSquare"]}
            className="text-gray text-xl"
          />
        ),
      },
    ];




  return (
    <>
      {Items.map((item) => (
        <div key={item.key} className="flex gap-4 items-center mb-8">
          {item.icon}
          <Link className="text-gray text-xl font-normal" href={item.path}>
            {item.title}
          </Link>
        </div>
      ))}
    </>
  );
}

export default Sidebar