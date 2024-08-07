import { User } from "@/entities";
import { instanceV1 } from "../instances";

export async function updateUser(updatedUser: Partial<User>) {
  const response = await instanceV1.patch<User>(
    `users/${updatedUser.id}`,
    updatedUser,
  );

  return response.data;
}
