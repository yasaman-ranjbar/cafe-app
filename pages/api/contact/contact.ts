import type { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/configs/db";
import ContactModel from "../../../models/Contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectToDB();

    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new contact entry
    const newContact = await ContactModel.create({
      name,
      email,
      subject,
      message,
    });

    return res
      .status(201)
      .json({
        message: "Contact form submitted successfully",
        data: newContact,
      });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
