import axios from "axios";

const API_URL = `http://${import.meta.env.VITE_HOST}:${
  import.meta.env.VITE_PORT
}`;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
