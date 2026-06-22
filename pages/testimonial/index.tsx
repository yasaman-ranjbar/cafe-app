import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Testimonial from "@/components/templates/Home/Testimonial";
import { COMMENTS } from "@/data/db";
import PageLayout from "@/layout/PageLayout";



function Index() {
  return (
    <PageLayout>
      <PageHeader title="testimonial" route="Testimonial" />
      <Testimonial comment={COMMENTS} />
    </PageLayout>
  );
}


export default Index;
