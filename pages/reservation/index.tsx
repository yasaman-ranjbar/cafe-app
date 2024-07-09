import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Reservation from "@/components/templates/Home/Reservation";
import PageLayout from "@/layout/PageLayout";

function Index() {
  return (
    <PageLayout>
      <PageHeader title="reservation" route="Reservation" />
      <Reservation />
    </PageLayout>
  );
}

export default Index;
