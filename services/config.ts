import axios from "axios";
import swal from "sweetalert";

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
      swal("error", "Invalid credentials", "error");
    }
  }
);

httpRequest.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log("response error", error);
    // if (error.response.status === 401) {
    //     swal("error", "Invalid credentials", "error");
    // }
    if (error?.response?.status === 422) {
      swal("error", "already exists", "error");
    } else if (error.response?.status === 404) {
      swal("error", "User not found", "error");
    }
    return error.response;
  }
);

export default httpRequest;
