import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { comparePassword, generateToken } from "@/utils/auth";
import { serialize } from "cookie";

const handler = async (req: any, res: any) => {
    if (req.method !== "POST") {
        return false;
    }

    try {
        connectToDB();

        const { identifier, password } = req.body;

        // Validation
        if (
            !identifier.trim() ||
            !password.trim()
        ) {
            return res
                .status(422)
                .json({ message: "Data is not valid !!" });
        }

        const user = await UserModel.findOne({
            $or: [{ username: identifier }, { email: identifier }]
        });

        if (!user) {
            return res
                .status(404)
                .json({ message: "User is not exist" });
        }

        const isValidPassword = await comparePassword(password, user.password)

        if (!isValidPassword) {
            return res
                .status(401)
                .json({ message: "username or Password is not valid" });
        }

        const token = generateToken({ email: user.email });
        return res
            .setHeader('Set-Cookie', serialize("token", token,
                { httpOnly: true, maxAge: 60 * 60 * 24, path: "/" }))
            .status(200)
            .json({ message: "User logged In Successfully" });


    } catch (error) {
        return res
            .status(500)
            .json({ message: "UnKnown Internal Server Erorr !!" })
    }
}

export default handler;