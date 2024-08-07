import { User } from "@/entities";
import { instanceV1 } from "../instances";

export async function findAllUsers() {
  const response = await instanceV1.get<User[]>("users");

  return response.data;
}
