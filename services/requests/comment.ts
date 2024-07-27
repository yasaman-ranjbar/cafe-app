import httpRequest from "../config";

interface AddCommentProps {
  username: string;
  email: string;
  description: string;
  score: number;
  productID: string;
}


export const addComment = async (data: AddCommentProps) => {
  return httpRequest.post("/comment/add", data);
};

export const getComment = async () => {
  return httpRequest.get("/comment/list");
};
