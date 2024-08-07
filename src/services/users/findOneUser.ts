import { User } from "@/entities";
import { instanceV1 } from "../instances";

export async function findOneUser(id: string) {
  const response = await instanceV1.get<User>(`users/${id}`);

  return response.data;
}
