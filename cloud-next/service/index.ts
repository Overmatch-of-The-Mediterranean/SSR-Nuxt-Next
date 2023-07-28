import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "http://codercba.com:9060/music-next/api";
const TIME_OUT = 1000 * 60;

export interface IResultData<T> {
  code: number;
  data: T;
}

class HYRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 全局拦截器
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      console.log("请求的拦截");
      // ...
      return config;
    });
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      console.log("响应的拦截");
      // ...
      return res;
    });
  }

  // 公共的请求的方法
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 开始发起网络请求
      this.instance
        .request<T>(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T = any>(url: string, params?: any): Promise<T> {
    return this.request<T>({ url, params, method: "GET" });
  }

  post<T = any>(url: string, data?: any, headers?: any): Promise<T> {
    return this.request<T>({ url, data, headers, method: "POST" });
  }
}

export default new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
