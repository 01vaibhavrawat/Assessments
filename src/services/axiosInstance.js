import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.150.105:3500",
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