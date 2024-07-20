import httpRequest from "../config";

interface NewsletterProps {
  email: string;
}

export const newsletter = async (email: NewsletterProps) => {
  return httpRequest.post("/newsletter/newsletter", email);
};
