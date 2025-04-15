import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api"
      : "http://backend:5001/api", // Docker service name used in production
  withCredentials: true,
});
