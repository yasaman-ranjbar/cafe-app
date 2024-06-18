import Image from "next/image";
import { MenuProps } from "./menuSection.types";

const MenuSection: React.FC<MenuProps> = ({ title, price, img, desc }) => {
    return (
      <div className="flex items-center">
        <div className="relative">
          <Image
            className="rounded-full"
            src={img}
            alt={title}
            width={200}
            height={100}
          />
          <div className="absolute top-0 right-0 size-10 flex items-center justify-center bg-yellow rounded-full text-primary text-xl">
            {price}$
          </div>
        </div>
        <div className="px-3.5">
          <h3 className="text-primary text-2xl font-semibold">{title}</h3>
          <h5 className="text-gray font-normal">{desc}</h5>
        </div>
      </div>
    );
};

export default MenuSection;
