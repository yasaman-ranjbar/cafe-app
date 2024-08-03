import AddProductForm from "@/components/templates/Products/AddProduct";
import ProductList from "@/components/templates/Products/ProductList";
import AdminLayout from "@/layout/AdminLayout";
import { getProduct, ProductDetailsProps } from "@/services/requests/product";

interface ProductDataProps {
  products: ProductDetailsProps[];
}

const AddProduct = ({ products }: ProductDataProps) => {
  return (
    <AdminLayout>
      <AddProductForm />
      <ProductList products={products} />
    </AdminLayout>
  );
};

export const getServerSideProps = async () => {
  const productList = await getProduct();

  return {
    props: {
      products: productList.data,
    },
  };
};

export default AddProduct;
