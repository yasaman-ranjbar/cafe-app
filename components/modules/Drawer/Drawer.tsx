import { DrawerProps } from "./drawer.types";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";


const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer, children }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-end p-8 ">
        <FontAwesomeIcon
          onClick={toggleDrawer}
          icon={Icons["faClose"]}
          className="text-primary/75 text-lg font-bold"
        />
      </div>

      <div className={"pt-12 px-4"}>{children}</div>
    </div>
  );
};

export default Drawer;
