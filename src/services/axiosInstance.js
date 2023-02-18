import axios from "axios";

const API = axios.create({
  baseURL: "https://healgratefully.onrender.com",
});

API.interceptors.request.use((request) => {
  request.headers["Content-Type"] = "application/json";
  return request;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default API;