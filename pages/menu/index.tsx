import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Menu from "@/components/templates/Home/Menu";
import PageLayout from "@/layout/PageLayout";

interface MenuDataProps {
    menu: MenuProps[];
}

function Index({ menu }: MenuDataProps) {
  return (
    <PageLayout>
      <PageHeader title="menu" route="Menu" />
      <Menu menu={menu} />
    </PageLayout>
  );
}

export const getStaticProps = async () => {

  const menuRes = await fetch("http://localhost:4000/menu");
  const menuData = await menuRes.json();


  return {
    props: {
      menu: menuData,
    },
    revalidate: 60 * 60 * 12,
  };
};

export default Index;
