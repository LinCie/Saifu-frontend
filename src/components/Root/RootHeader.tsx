import { Bars3Icon, WalletIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { Link } from "react-router-dom";

export function RootHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-primary/70 px-3 py-2 text-background backdrop-blur dark:border-b-2 dark:bg-background/70 dark:text-foreground md:px-4 md:py-3">
      <div className="flex items-center">
        <Link to="/" className="flex select-none items-center gap-1">
          <WalletIcon className="size-8 md:size-9" />
          <div className="text-xl font-bold">Open Wallet</div>
        </Link>
        <div className="flex-1"></div>
        <span className="hidden md:block">
          <ThemeToggle />
        </span>
        <Bars3Icon className="size-10 md:hidden" />
      </div>
    </header>
  );
}
