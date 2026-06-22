
import About from "@/components/templates/Home/About";
import Menu from "@/components/templates/Home/Menu";
import Offer from "@/components/templates/Home/Offer";
import Reservation from "@/components/templates/Home/Reservation";
import Services from "@/components/templates/Home/Services";
import Slider from "@/components/templates/Home/Slider";
import Testimonial from "@/components/templates/Home/Testimonial";
import { CAFE_MENU, CAFE_SERVICES, COMMENTS } from "@/data/db";
import PageLayout from "@/layout/PageLayout";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>coffee application</title>
      </Head>
      <PageLayout>
        <Slider />
        <About />
        <Services services={CAFE_SERVICES} />
        <Offer />
        <Menu menu={CAFE_MENU} />
        <Reservation />
        <Testimonial comment={COMMENTS} />
      </PageLayout>
    </>
  );
}
export default Index;
