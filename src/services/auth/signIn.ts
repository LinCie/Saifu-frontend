import { instanceV1 } from "../instances";

interface SignInResponse {
  access_token: string;
  refresh_token: string;
}

export async function signIn(username: string, password: string) {
  const response = await instanceV1.post<SignInResponse>("auth/signin", {
    username,
    password,
  });

  return response.data;
}
