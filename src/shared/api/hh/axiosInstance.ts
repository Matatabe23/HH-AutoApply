import axios from "axios";

export const hhApi = axios.create({
  baseURL: "https://api.hh.ru/",
  headers: {
    "Content-Type": "application/json",
  },
});
