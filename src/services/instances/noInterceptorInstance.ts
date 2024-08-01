import axios from "axios";

const noInterceptorInstance = axios.create({
  baseURL: "/api/v1/",
});

export { noInterceptorInstance };
