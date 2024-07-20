import httpRequest from "../config";

interface UserLoginProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contact = async (data: UserLoginProps) => {
  return httpRequest.post("/contact/contact", data);
};
