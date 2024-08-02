import axios from "axios";

const defaultInstance = axios.create({
  baseURL: "/api/",
});

export { defaultInstance };
