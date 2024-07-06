import { serialize } from "cookie";

const handler = async (req: any, res: any) => {
  if (req.method !== "GET") {
    return false;
  }

  return res
    .status(200)
    .setHeader("set-Cookie" , serialize("token" , "" , {
        path:"/",
        maxAge: 0,
    }))
    .json({ message: "User logged out successfully" });
};

export default handler;
