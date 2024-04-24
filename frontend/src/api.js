import axios from 'axios';

const URI = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: `http://${URI}:5000`
});

export default api;