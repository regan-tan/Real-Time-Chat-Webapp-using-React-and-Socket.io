import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.DEV
      ? "http://localhost:5001/api" // full URL, because Vite proxy doesn't work inside Docker containers
      : import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});