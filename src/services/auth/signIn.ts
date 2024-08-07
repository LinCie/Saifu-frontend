import { User } from "@/entities";
import { instanceV1 } from "../instances";

interface ISignInResponse {
  user: User;
  access_token: string;
  refresh_token: string;
}

export async function signIn(username: string, password: string) {
  const response = await instanceV1.post<ISignInResponse>("auth/signin", {
    username,
    password,
  });

  return response.data;
}
