import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Reservation from "@/components/templates/Home/Reservation";

function Index() {
  return (
    <>
      <PageHeader title="reservation" route="Reservation" />
      <Reservation />
    </>
  );
}

export default Index;
