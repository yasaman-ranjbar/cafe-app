import { ServiceSectionCardProps } from "@/components/modules/ServicesSectionCard/serviceSection.types";
import About from "@/components/templates/Home/About";
import Offer from "@/components/templates/Home/Offer";
import Services from "@/components/templates/Home/Services";
import Slider from "@/components/templates/Home/Slider";

interface DataProps {
  data: {
    services: ServiceSectionCardProps[];
  };
}

function Index({ data }: DataProps) {
  return (
    <div>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:4000/services"
  );
  const services = await res.json();

  return {
    props: {
      data: {
        services,
      },
    },
    revalidate: 60 * 60 * 12,
  };
};

export default Index;
