import { WalletIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { cn } from "@/utilities";
import { useContext } from "react";
import { SignOutContext, UserContext } from "@/contexts";

interface IHeaderLink {
  to: string;
  text: string;
  forLoggedIn: boolean;
}

const headerLinks: IHeaderLink[] = [
  { to: "/signin", text: "Sign In", forLoggedIn: false },
  { to: "/signup", text: "Sign Up", forLoggedIn: false },
];

export function RootHeader() {
  const location = useLocation();
  const userContext = useContext(UserContext);
  const signOutContext = useContext(SignOutContext);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-background/70 px-3 py-2 text-foreground backdrop-blur md:px-4 md:py-3">
      <div className="flex items-center">
        <Link to="/" className="flex select-none items-center gap-1">
          <WalletIcon className="size-10 md:size-8" />
          <div className="text-2xl font-bold md:text-lg">Open Wallet</div>
        </Link>
        <div className="mx-3 flex flex-1 items-center justify-end gap-3">
          {userContext?.user && (
            <button
              className="hidden text-sm hover:text-primary/80 md:block"
              onClick={signOutContext?.handleSignOut}
            >
              Sign Out
            </button>
          )}
          {headerLinks
            .filter((link) =>
              Boolean(userContext?.user) === link.forLoggedIn ? link : null,
            )
            .map((link) => (
              <Link
                key={link.text}
                to={link.to}
                className={cn(
                  "hidden text-sm hover:text-primary/80 md:block",
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-foreground",
                )}
              >
                {link.text}
              </Link>
            ))}
        </div>
        <span className="hidden md:block">
          <ThemeToggle />
        </span>
        <Sidebar />
      </div>
    </header>
  );
}
