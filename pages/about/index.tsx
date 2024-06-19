import PageHeader from "@/components/modules/PageHeader/PageHeader";
import About from "@/components/templates/Home/About";

function Index() {
  return (
    <div>
      <PageHeader title="About us" route="About Us" />
      <About />
    </div>
  );
}

export default Index;
