import axios, { AxiosInstance } from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: "example.com",
  headers: {
    "Content-Type": "application/json",
  },
}); 