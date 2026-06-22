import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Menu from "@/components/templates/Home/Menu";
import PageLayout from "@/layout/PageLayout";
import { Suspense } from "react";
import Loading from "../loading";
import { CAFE_MENU } from "@/data/db";

function Index() {
  return (
    <PageLayout>
      <PageHeader title="menu" route="Menu" />
      {/* <Loading />  */}
      <Suspense fallback={<Loading />}>
        <Menu menu={CAFE_MENU} />
      </Suspense>
    </PageLayout>
  );
}

export default Index;
