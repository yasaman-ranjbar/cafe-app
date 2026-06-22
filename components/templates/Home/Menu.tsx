import MenuSection, { ProductDetailsProps } from "@/components/modules/MenuSection/MenuSection";
import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";

function Menu({ menu }: { menu: ProductDetailsProps[] }) {

  return (
    <div className="container py-12">
      <SectionHeader header="Competitive Pricing" title="MENU & PRICING" />

      <div>
        <div className="grid grid-cols-2 gap-12">
          {menu?.map((item) => (
            <MenuSection key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
