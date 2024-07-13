import PageHeader from "@/components/modules/PageHeader/PageHeader";
import About from "@/components/templates/Home/About";
import PageLayout from "@/layout/PageLayout";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>about coffee application</title>
        <meta
          name="description"
          content="about coffee application to reserve your coffee"
        />
      </Head>
      <PageLayout>
        <PageHeader title="About us" route="About Us" />
        <About />
      </PageLayout>
    </>
  );
}

export default Index;
