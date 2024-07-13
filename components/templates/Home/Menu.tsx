import MenuSection from "@/components/modules/MenuSection/MenuSection";
import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import { useSearchParams } from "next/navigation";

function Menu({ menu }: { menu: MenuProps[] }) {
  const searchParam = useSearchParams();

  return (
    <div className="container py-12">
      <SectionHeader header="Competitive Pricing" title="MENU & PRICING" />
      <h2 className="text-primary text-4xl font-bold mb-12">
        {searchParam.get("q") === "hot" ? (
          "Hot Coffee"
        ) : searchParam.get("q") === "cold" ? (
          "Cold Coffee"
        ) : (
          <div className="grid grid-cols-2">
            <div>Hot Coffee</div>
            <div>Cold Coffee</div>
          </div>
        )}
      </h2>
      <div className="flex">
        <div className="flex flex-col gap-12">
          {menu
            .filter((item) => item.type === "hot")
            .slice(0, 3)
            .map((item) => (
              <MenuSection key={item.id} {...item} />
            ))}
        </div>
        <div className="flex flex-col gap-12">
          {menu
            .filter((item) => item.type === "cold")
            .slice(0, 3)
            .map((item) => (
              <MenuSection key={item.id} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
