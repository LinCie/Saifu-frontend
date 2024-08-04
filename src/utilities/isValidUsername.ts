export function isValidUsername(username: string): boolean {
  const usernameRegex = /^[a-z0-9._]+$/;
  return usernameRegex.test(username);
}
