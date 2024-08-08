import { User } from "@/entities";
import { createContext } from "react";

export interface IUserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);
