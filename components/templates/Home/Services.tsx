import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import ServiceSectionCard from "@/components/modules/ServicesSectionCard/ServiceSectionCard";
import { ServiceSectionCardProps } from "@/components/modules/ServicesSectionCard/serviceSection.types";


function Services({ services }: { services: ServiceSectionCardProps[] }) {
  return (
    <div className="container py-12">
      <SectionHeader title="OUR SERVICES" header="Fresh & Organic Beans" />
      <div className="grid grid-cols-2 gap-y-10">
        {services.map((service) => (
          <ServiceSectionCard
            key={service?.id}
            title={service.title}
            img={service.img}
            icon={service.icon}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
