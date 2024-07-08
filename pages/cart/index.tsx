import PageHeader from "@/components/modules/PageHeader/PageHeader";
import PageLayout from "@/layout/PageLayout"

const index = () => {
  return (
    <PageLayout>
      <PageHeader title="Cart" route="cart" />
      Cart
    </PageLayout>
  );
}

export default index