import axios from "axios";

export const instanceV1 = axios.create({
  baseURL: "/api/v1/",
});
