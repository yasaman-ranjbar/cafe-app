import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Menu from "@/components/templates/Home/Menu";
import PageLayout from "@/layout/PageLayout";

function Index({ data }: { data: MenuProps[] }) {
  return (
    <PageLayout>
      <PageHeader title="Search" route="Search" />
      <Menu menu={data} />
    </PageLayout>
  );
}
export const getServerSideProps = async (context: { [key: string]: any }) => {
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  const searchResult = data.filter(
    (item: MenuProps) =>
      item?.type?.toLowerCase().includes(context.query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(context.query.q.toLowerCase())
  );

  return {
    props: {
      data: searchResult,
    },
  };
};

export default Index;
