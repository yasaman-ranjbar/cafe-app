import { DrawerProps } from "./drawer.types";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 min-w-96 h-full bg-white text-Primary transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <button
        className="p-2 bg-red-500 text-primary rounded m-2"
        onClick={toggleDrawer}
      > */}
      <FontAwesomeIcon
        onClick={toggleDrawer}
        icon={Icons["faClose"]}
        className="text-gay text-lg font-bold"
      />

      {/* </button> */}
      <div className="pt-12 px-4">{children}</div>
    </div>
  );
};

export default Drawer;
