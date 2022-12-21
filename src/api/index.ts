import axios from "axios";

export const todoListApi = axios.create({
  baseURL: "http://localhost:4500/api",
});

export { axios };
