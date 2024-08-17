import { createContext } from "react";

export interface ISignOutContext {
  handleSignOut: () => void;
}

export const SignOutContext = createContext<ISignOutContext | undefined>(
  undefined,
);
