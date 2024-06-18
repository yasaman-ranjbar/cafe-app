import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import ServiceSectionCard from "@/components/modules/ServicesSectionCard/ServiceSectionCard";
import { FaCoffee, FaAward, FaTruck, FaTable } from "react-icons/fa";


function Services() {
  return (
    <div className="container py-12">
      <SectionHeader title="OUR SERVICES" header="Fresh & Organic Beans" />
      <div className="grid grid-cols-2 gap-y-10">
        <ServiceSectionCard
          title="Fastest Door Delivery"
          src="/images/service-1.jpg"
          icon={<FaTruck className="text-primary text-2xl" />}
          description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
        />
        <ServiceSectionCard
          title="Fresh Coffee Beans"
          src="/images/service-2.jpg"
          icon={<FaCoffee className="text-primary text-2xl" />}
          description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
        />
        <ServiceSectionCard
          title="Best Quality Coffee"
          src="/images/service-3.jpg"
          icon={<FaAward className="text-primary text-2xl" />}
          description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
        />
        <ServiceSectionCard
          title="Online Table Booking"
          src="/images/service-4.jpg"
          icon={<FaTable className="text-primary text-2xl" />}
          description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
        />
      </div>
    </div>
  );
}

export default Services;
