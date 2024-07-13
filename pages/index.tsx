import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import { ServiceSectionCardProps } from "@/components/modules/ServicesSectionCard/serviceSection.types";
import { TestimonialProps } from "@/components/modules/Testimonial/testimonial.types";
import About from "@/components/templates/Home/About";
import Menu from "@/components/templates/Home/Menu";
import Offer from "@/components/templates/Home/Offer";
import Reservation from "@/components/templates/Home/Reservation";
import Services from "@/components/templates/Home/Services";
import Slider from "@/components/templates/Home/Slider";
import Testimonial from "@/components/templates/Home/Testimonial";
import PageLayout from "@/layout/PageLayout";
import Head from "next/head";

interface DataProps {
  data: {
    services: ServiceSectionCardProps[];
    menu: MenuProps[];
    comment: TestimonialProps[];
  };
}

function Index({ data }: DataProps) {
  return (
    <>
      <Head>
        <title>coffee application</title>
        <meta
          name="description"
          content="coffee application to book a table and reserve your coffee"
        />
      </Head>
      <PageLayout>
        <Slider />
        <About />
        <Services services={data.services} />
        <Offer />
        <Menu menu={data.menu} />
        <Reservation />
        <Testimonial comment={data.comment} />
      </PageLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const servicesRes = await fetch("http://localhost:4000/services");
  const servicesData = await servicesRes.json();

  const menuRes = await fetch("http://localhost:4000/menu");
  const menuData = await menuRes.json();

  const CommentRes = await fetch("http://localhost:4000/comment");
  const commentData = await CommentRes.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comment: commentData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
};

export default Index;
