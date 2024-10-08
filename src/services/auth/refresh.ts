import Cookies from "js-cookie";
import { defaultInstance } from "../instances";

interface RefreshResponse {
  access_token: string;
}

export async function refresh() {
  const refreshToken = Cookies.get("refresh_token");
  if (!refreshToken) {
    throw new Error("refresh token does not exist");
  }

  const response = await defaultInstance.post<RefreshResponse>("v1/auth/refresh", {
    refresh_token: refreshToken,
  });
  const accessToken = response.data.access_token;

  const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
  Cookies.set("access_token", accessToken, { expires: inOneHour });

  return accessToken;
}
