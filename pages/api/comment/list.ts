import type { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await connectToDB();
      const comment = await CommentModel.find({}, "-__v");
      res.status(200).json(comment);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
