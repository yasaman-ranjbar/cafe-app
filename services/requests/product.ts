import httpRequest from "../config";
import { AddCommentProps } from './comment';

interface AddProductProps {
  title: string;
  description: string;
  price: number;
  image: string;
  discount: number;
  tags: string[];
}

export interface ProductDetailsProps {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  discount: number;
  tags: string[];
  comment: AddCommentProps[];
  score: number;
}

export const addProduct = async (data: AddProductProps) => {
  return httpRequest.post("/product/add", data);
};

export const getProduct = async () => {
  return httpRequest.get("/product/list");
};

export const getProductByID = async (id: string): Promise<ProductDetailsProps> => {
  return httpRequest.get(`/product/${id}`);
};
