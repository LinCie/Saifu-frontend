import axios from "axios";
import Cookies from "js-cookie";
import { refresh } from "../auth";

const instanceV1 = axios.create({
  baseURL: "/api/v1/",
});

instanceV1.interceptors.request.use(async (config) => {
  let accessToken = Cookies.get("access_token");
  if (!accessToken) {
    accessToken = await refresh();
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export { instanceV1 };
