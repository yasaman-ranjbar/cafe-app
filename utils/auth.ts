import { hash , compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const hashPassword = async (password: string) => {
    const hashedPassword = await hash(password, 12); //by default 12
    return hashedPassword;
}

const generateToken = (data: Record<string, any>) => {
    const token = sign({ ...data }, process.env.privateKey as string,
        { expiresIn: "24h", algorithm: "HS256" });
    return token
}

const comparePassword = async (password: string, hashedPassword: string) => {
    const isMatch = await compare(password, hashedPassword);
    return isMatch;
}

export { hashPassword, generateToken, comparePassword };