import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MobileNavbar = () => {
  return (
    <div className="flex justify-between items-center text-white w-full">
      <div>
        <MenuIcon />
      </div>
      <div>COFFEE Reservation</div>
      <div className="flex gap-2">
        <div><SearchIcon /></div>
        <div><ShoppingCartIcon /></div>
      </div>
    </div>
  );
};

export default MobileNavbar;
