import { MenuProps } from "@/components/modules/MenuSection/menuSection.types";
import { TestimonialProps } from "@/components/modules/Testimonial/testimonial.types";
import ProductComments from "@/components/templates/Comments/ProductComments";
import Testimonial from "@/components/templates/Home/Testimonial";
import ProductDetails from "@/components/templates/Products/ProductDetails";
import PageLayout from "@/layout/PageLayout";

interface CommentDataProps {
  comment: TestimonialProps[];
  product: MenuProps;
}

function Index({ product, comment }: CommentDataProps) {
  return (
    <PageLayout>
      <ProductDetails product={product} />
      <ProductComments comment={comment} />
    </PageLayout>
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

    const commentRes = await fetch("http://localhost:4000/comment");
    const comments = await commentRes.json();

    const productComments = comments.filter(
      (item: TestimonialProps) => item.productID === params.id
    );

    return {
      props: {
        product,
        comment: productComments,
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
