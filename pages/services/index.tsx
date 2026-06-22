import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Services from "@/components/templates/Home/Services";
import { CAFE_SERVICES } from "@/data/db";
import PageLayout from "@/layout/PageLayout";

function Index() {
  return (
    <PageLayout>
      <PageHeader title="services" route="Services" />
      <Services services={CAFE_SERVICES} />
    </PageLayout>
  );
}


export default Index;
