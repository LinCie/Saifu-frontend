import { Outlet, useLoaderData } from "react-router-dom";
import { RootHeader } from "./RootHeader";
import { useState } from "react";
import { User } from "@/entities";
import { SignOutContext, UserContext } from "@/contexts";
import { ThemeProvider } from "@/components/Theme/Theme";
import Cookies from "js-cookie";

export function Root() {
  const loader = useLoaderData();

  const [user, setUser] = useState<User | null>(() =>
    loader instanceof User ? loader : null,
  );

  function handleSignOut() {
    setUser(null);

    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("user_id");
  }

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UserContext.Provider value={{ user, setUser }}>
          <SignOutContext.Provider value={{ handleSignOut }}>
            <RootHeader />
            <main className="container min-h-screen bg-background text-foreground">
              <Outlet />
            </main>
          </SignOutContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}
