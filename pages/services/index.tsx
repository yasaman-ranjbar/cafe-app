import PageHeader from "@/components/modules/PageHeader/PageHeader";
import { ServiceSectionCardProps } from "@/components/modules/ServicesSectionCard/serviceSection.types";
import Services from "@/components/templates/Home/Services";

interface ServicesProps {
    services: ServiceSectionCardProps[];
}

function Index({ services }: ServicesProps) {
  return (
    <>
      <PageHeader title="services" route="Services" />
      <Services services={services} />
    </>
  );
}

export const getStaticProps = async () => {
  const servicesRes = await fetch("http://localhost:4000/services");
  const servicesData = await servicesRes.json();

  return {
    props: {
        services: servicesData,
      },
  };
};

export default Index;
