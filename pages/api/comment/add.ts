import type { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/configs/db";
import CommentModel from "../../../models/Comment";
import ProductModel from "../../../models/Product";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectToDB();
    const { username, email, description, score, productID } = req.body;

    // Create new contact entry
    const comment = await CommentModel.create({
      username,
      email,
      description,
      score,
      productID,
    });

     await ProductModel.findByIdAndUpdate(
       req.body.productID,
       { $push: { comment: comment._id } },
       { new: true }
     );

    return res.status(201).json({
      message: "your comment was created successfully",
      data: comment,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
