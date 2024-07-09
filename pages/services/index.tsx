import PageHeader from "@/components/modules/PageHeader/PageHeader";
import { ServiceSectionCardProps } from "@/components/modules/ServicesSectionCard/serviceSection.types";
import Services from "@/components/templates/Home/Services";
import PageLayout from "@/layout/PageLayout";

interface ServicesProps {
    services: ServiceSectionCardProps[];
}

function Index({ services }: ServicesProps) {
  return (
    <PageLayout>
      <PageHeader title="services" route="Services" />
      <Services services={services} />
    </PageLayout>
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
