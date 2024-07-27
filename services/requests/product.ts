import httpRequest from "../config";


interface AddProductProps {
  title: string;
  description: string;
  price: number;
  image: string;
  discount: number;
  tags: string[];
}


export const addProduct = async (data: AddProductProps) => {
  return httpRequest.post("/product/add", data);
};


export const getProduct = async () => {
  return httpRequest.get("/product/list");
};