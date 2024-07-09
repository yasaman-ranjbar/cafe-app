import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Information from "@/components/templates/Contact/Information";
import PageLayout from "@/layout/PageLayout";

function Index() {
  return (
    <PageLayout>
      <PageHeader
        title="contact"
        route="Contact"
      />
      <Information />
    </PageLayout>
  );
}

export default Index;
