import axios from "axios";

const apiRequests = axios.create({
  baseURL: "https://dummyjson.com",
});

apiRequests.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiRequests;