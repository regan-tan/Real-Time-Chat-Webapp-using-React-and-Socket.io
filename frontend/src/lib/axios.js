// src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "http://localhost:5001/api", // hardcoded for docker localhost testing
  withCredentials: true,
});
