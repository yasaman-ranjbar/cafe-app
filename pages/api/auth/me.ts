import connectToDB from "@/configs/db";
import { verifyToken } from "@/utils/auth";
import UserModel from "@/models/User";

const handler = async (req: any, res: any) => {
    if (req.method !== 'GET') {
        return false
    }

    try {
        connectToDB()

        const { token } = req.cookies;

        console.log(token)

        if (!token) {
            return res.status(401).json({ message: 'you are not authorized' });
        }

        const payloadData = verifyToken(token);
        if (!payloadData) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const user = await UserModel.findOne(
            {
                email: payloadData.email
            },
            "firstname lastname role"
        );

        return res.status(200).json({ data: user });
    }

    catch (error) {
        return res
            .status(500)
            .json({ message: "UnKnown Internal Server Erorr !!" })
    }
}

export default handler;