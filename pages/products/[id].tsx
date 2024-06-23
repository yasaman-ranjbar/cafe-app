import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import ProductDetails from "@/components/templates/Products/ProductDetails";
import { notFound } from "next/navigation";

function Index({ product }: { product: MenuProps }) {
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json();

  const paths = products.map((product: MenuProps) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const { params } = context;

  try {
    const res = await fetch(`http://localhost:4000/menu/${params.id}`);
    const product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Index;
