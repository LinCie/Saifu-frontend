import Cookies from "js-cookie";
import { inOneHour, inOneMonth } from "./time";

interface IStoreCookieInfo {
  access_token: string;
  refresh_token: string;
  user_id: string;
}

export function storeCookieInfo(data: IStoreCookieInfo) {
  Cookies.set("access_token", data.access_token, {
    sameSite: "Lax",
    expires: inOneHour,
    secure: true,
  });
  Cookies.set("refresh_token", data.refresh_token, {
    sameSite: "Lax",
    expires: inOneMonth,
    secure: true,
  });
  Cookies.set("user_id", data.user_id, {
    sameSite: "Lax",
    secure: true,
  });
}
