import httpRequest from "../config";

export interface AddCommentProps {
  _id: string;
  username: string;
  email: string;
  description: string;
  score: number;
  productID: string;
  date: Date;
}


export const addComment = async (data: AddCommentProps) => {
  return httpRequest.post("/comment/add", data);
};

export const getComment = async () => {
  return httpRequest.get("/comment/list");
};
