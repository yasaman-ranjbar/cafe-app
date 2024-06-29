import httpRequest from "@/services/config";

interface UserLoginProps {
    password: string;
    identifier: string;
}

export interface UserRegisterProps extends Omit<UserLoginProps, "identifier"> {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
}

export const login = async (user: UserLoginProps) => {
    return httpRequest.post("/auth/login", user);
}

export const register = async (user: UserRegisterProps) => {
    return httpRequest.post("/auth/register", user);
}