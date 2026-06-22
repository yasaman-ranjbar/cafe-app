
import ProductDetails from "@/components/templates/Products/ProductDetails";
import PageLayout from "@/layout/PageLayout";
import {  ProductDetailsProps } from "@/services/requests/product";
import Head from "next/head";

interface CommentDataProps {
  product: ProductDetailsProps;
}

function Index({ product }: CommentDataProps) {
  return (
    <>
      <Head>
        <title>{product?.title}</title>
        <meta name="description" content={product?.desc} />
      </Head>
      <PageLayout>
        <ProductDetails />
      </PageLayout>
    </>
  );
}



export default Index;
