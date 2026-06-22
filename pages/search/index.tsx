import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Menu from "@/components/templates/Home/Menu";
import { CAFE_MENU } from "@/data/db";
import PageLayout from "@/layout/PageLayout";

function Index() {
  return (
    <PageLayout>
      <PageHeader title="Search" route="Search" />
      <Menu menu={CAFE_MENU} />
    </PageLayout>
  );
}

export default Index;
