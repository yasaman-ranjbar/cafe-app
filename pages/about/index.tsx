import PageHeader from "@/components/modules/PageHeader/PageHeader";
import About from "@/components/templates/Home/About";
import PageLayout from "@/layout/PageLayout";

function Index() {
  return (
    <PageLayout>
      <PageHeader title="About us" route="About Us" />
      <About />
    </PageLayout>
  );
}

export default Index;
