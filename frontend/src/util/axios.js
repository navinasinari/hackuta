import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://content.guardianapis.com/"
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
  interceptors: axiosInstance.interceptors
};
