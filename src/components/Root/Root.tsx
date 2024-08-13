import { Outlet, useLoaderData } from "react-router-dom";
import { RootHeader } from "./RootHeader";
import { useState } from "react";
import { User } from "@/entities";
import { UserContext } from "@/contexts";
import { ThemeProvider } from "@/components/Theme/Theme";

export function Root() {
  const loader = useLoaderData();

  const [user, setUser] = useState<User | null>(() =>
    loader instanceof User ? loader : null,
  );

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserContext.Provider value={{ user, setUser }}>
          <RootHeader />
          <main className="min-h-screen bg-background text-foreground">
            <Outlet />
          </main>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}
