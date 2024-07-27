import type { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/configs/db";
import ProductModel from "../../../models/Product";
import "../../../models/Comment";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectToDB();

    const { title, description, price, image, discount, tags } = req.body;

    // Create new contact entry
    const newProduct = await ProductModel.create({
      title,
      description,
      price,
      image,
      discount,
      tags,
    });

    return res.status(201).json({
      message: "your product was created successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

