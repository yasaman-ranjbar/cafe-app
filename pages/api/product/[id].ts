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
      const { id } = req.query;

      const product = await ProductModel.findById(id).populate({
        path: "comment",
        options: { strictPopulate: false },
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
