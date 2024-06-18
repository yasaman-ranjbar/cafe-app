import MenuSection from "@/components/modules/MenuSection/MenuSection";
import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";

function Menu({ menu }: { menu: MenuProps[] }) {
  return (
    <div className="container py-12">
      <SectionHeader header="Competitive Pricing" title="MENU & PRICING" />
      <div className="flex">
        <div className="flex flex-col gap-12">
          <h2 className="text-primary text-4xl font-bold mb-12">Hot Coffee</h2>
          {menu
            .filter((item) => item.type === "hot")
            .slice(0, 3)
            .map((item) => (
              <MenuSection
                key={item.id}
                desc={item.desc}
                img={item.img}
                price={item.price}
                title={item.title}
              />
            ))}
        </div>
        <div className="flex flex-col gap-12">
          <h2 className="text-primary text-4xl font-bold mb-12">Cold Coffee</h2>
          {menu
            .filter((item) => item.type === "cold")
            .slice(0, 3)
            .map((item) => (
              <MenuSection
                key={item.id}
                desc={item.desc}
                img={item.img}
                price={item.price}
                title={item.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
