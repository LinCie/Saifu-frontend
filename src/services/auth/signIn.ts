import { User } from "@/entities";
import { defaultInstance } from "../instances";

interface ISignInResponse {
  user: User;
  access_token: string;
  refresh_token: string;
}

export async function signIn(username: string, password: string) {
  const response = await defaultInstance.post<ISignInResponse>("v1/auth/signin", {
    username,
    password,
  });

  return response.data;
}
