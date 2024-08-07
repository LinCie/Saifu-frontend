import { User } from "@/entities";
import { defaultInstance } from "../instances";

interface ISignUpResponse {
  user: User;
  access_token: string;
  refresh_token: string;
}

export async function signUp(username: string, password: string) {
  const response = await defaultInstance.post<ISignUpResponse>(
    "v1/auth/signup",
    {
      username,
      password,
    },
  );

  return response.data;
}
