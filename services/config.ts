import axios from "axios";
import { toast } from "react-toastify";

const httpRequest = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

httpRequest.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      toast.error("Invalid credentials");
    }
  }
);

httpRequest.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    // if (error.response.status === 401) {
    // }
    if (error?.response?.status === 422) {
      toast.error("User is already exist");
    } else if (error.response?.status === 404) {
      toast.error("User not found");
    }
    return error.response;
  }
);

export default httpRequest;
