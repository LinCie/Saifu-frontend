import { Outlet, useLoaderData } from "react-router-dom";
import { RootHeader } from "./RootHeader";
import { useState } from "react";
import { User } from "@/entities";
import { UserContext } from "@/contexts";

export function Root() {
  const loader = useLoaderData();

  const [user, setUser] = useState<User | null>(() =>
    loader instanceof User ? loader : null,
  );

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RootHeader />
        <main className="min-h-screen bg-slate-100 px-2 text-slate-700 dark:bg-gray-700 dark:text-slate-200">
          <Outlet />
        </main>
      </UserContext.Provider>
    </>
  );
}
