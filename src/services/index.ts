import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

const axiosInstance = axios.create({ baseURL: BASE_URL, timeout: TIME_OUT });

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return err;
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config.data;
  },
  (err) => {
    return err;
  }
);

export default axiosInstance;
