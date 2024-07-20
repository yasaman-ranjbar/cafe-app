import type { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/configs/db";
import NewsletterModel from "../../../models/Newsletter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectToDB();

    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }

    // Check if email already exists
    const existingEmail = await NewsletterModel.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Create new contact entry
    const newEmail = await NewsletterModel.create({
      email,
    });

    return res.status(201).json({
      message: "your email was submitted successfully",
      data: newEmail,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
