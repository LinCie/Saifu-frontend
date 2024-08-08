import { User } from "@/entities";
import { findOneUser } from "@/services/users";
import Cookies from "js-cookie";

export async function userLoader() {
  const userId = Cookies.get("user_id");

  if (userId) {
    try {
      const user = await findOneUser(userId);
      return new User(user);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return null;
}
