import type { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await connectToDB();
      const products = await ProductModel.find({}, "-__v").populate({
        path: "comment",
        options: { strictPopulate: false },
      });
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
