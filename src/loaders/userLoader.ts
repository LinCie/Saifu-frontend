import { findOneUser } from "@/services/users";
import Cookies from "js-cookie";

export async function userLoader() {
  const userId = Cookies.get("user_id");

  if (userId) {
    try {
      return await findOneUser(userId);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return null;
}
