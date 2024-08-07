import { User } from "@/entities";
import { instanceV1 } from "../instances";

export async function createUser(username: string, password: string) {
  const response = await instanceV1.post<User>("users", { username, password });

  return response.data;
}
