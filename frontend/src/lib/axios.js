import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api"
      : "http://localhost:5001/api", // <- for local Docker
  withCredentials: true,
});