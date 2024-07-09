import { verifyToken } from "@/utils/auth";
import Checkout from "@/components/templates/Checkout/Checkout";
import PageLayout from "@/layout/PageLayout";
import PageHeader from "@/components/modules/PageHeader/PageHeader";

const index = () => {
  return (
    <PageLayout>
      <PageHeader title="Check out" route="Check Out" />
      <Checkout />
    </PageLayout>
  );
};

export async function getServerSideProps(context: {
  req: Record<string, any>;
}) {
  const token = context.req.cookies.token;
  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //     },
  //   };
  // }
  // const payloadData = verifyToken(token);
  // if (!payloadData) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //     },
  //   };
  // }

  return {
    props: {},
  };
}

export default index;
