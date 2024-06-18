import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import { ServiceSectionCardProps } from "@/components/modules/ServicesSectionCard/serviceSection.types";
import About from "@/components/templates/Home/About";
import Menu from "@/components/templates/Home/Menu";
import Offer from "@/components/templates/Home/Offer";
import Reservation from "@/components/templates/Home/Reservation";
import Services from "@/components/templates/Home/Services";
import Slider from "@/components/templates/Home/Slider";

interface DataProps {
  data: {
    services: ServiceSectionCardProps[];
    menu: MenuProps[];
  };
}

function Index({ data }: DataProps) {
  return (
    <div>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu menu={data.menu} />
      <Reservation />
    </div>
  );
}

export const getStaticProps = async () => {
  const servicesRes = await fetch("http://localhost:4000/services");
  const servicesData = await servicesRes.json();

  const menuRes = await fetch("http://localhost:4000/menu");
  const menuData = await menuRes.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
};

export default Index;
