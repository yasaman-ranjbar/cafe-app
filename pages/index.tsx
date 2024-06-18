import About from "@/components/templates/Home/About";
import Services from "@/components/templates/Home/Services";
import Slider from "@/components/templates/Home/Slider";

function Index() {
  return (
    <div>
      <Slider />
      <About />
      <Services />
    </div>
  );
}

export default Index;
