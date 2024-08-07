import { instanceV1 } from "../instances";

export async function deleteUser(id: string) {
  await instanceV1.delete(`users/${id}`);

  return;
}
