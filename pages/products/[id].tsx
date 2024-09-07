import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import ProductComments from "@/components/templates/Comments/ProductComments";
import ProductDetails from "@/components/templates/Products/ProductDetails";
import PageLayout from "@/layout/PageLayout";
import { getProduct, getProductByID, ProductDetailsProps } from "@/services/requests/product";
import Head from "next/head";

interface CommentDataProps {
  product: ProductDetailsProps;
  head: Record<string, string>;
}

function Index({ product, head }: CommentDataProps) {
  return (
    <>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
      </Head>
      <PageLayout>
        <ProductDetails product={product} />

        <ProductComments comment={product.comment} />
      </PageLayout>
    </>
  );
}

export async function getStaticPaths() {
  const res = await getProduct();

  

  const paths = res.data.map((product: MenuProps) => ({
    params: { id: String(product._id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string  }}) {
  const { params } = context;

  try {
    const { data } : any = await getProductByID(params.id);

    const serializedProduct = {
      _id: data?._id ?? null,
      title: data?.title ?? "",
      description: data?.description ?? "",
      price: data?.price ?? 0,
      image: data?.image ?? "",
      discount: data?.discount ?? 0,
      tags: data?.tags ?? [],
      comment: data?.comment ?? [],
      score: data?.score ?? 0,
    };

    return {
      props: {
        head: {
          title: `Coffee Shop | ${serializedProduct.title}`,
          description: `Coffee Shop | ${serializedProduct.title}`,
        },
        product: data,
      },
      revalidate: 60 * 60 * 12,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Index;
