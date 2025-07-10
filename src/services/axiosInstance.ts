import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_KEY}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) throw new Error(error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
