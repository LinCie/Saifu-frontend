import { WalletIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function RootHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-background/70 px-3 py-2 text-foreground backdrop-blur md:px-4 md:py-3">
      <div className="flex items-center">
        <Link to="/" className="flex select-none items-center gap-1">
          <WalletIcon className="size-10 md:size-8" />
          <div className="text-2xl font-bold md:text-lg">Open Wallet</div>
        </Link>
        <div className="flex-1"></div>
        <span className="hidden md:block">
          <ThemeToggle />
        </span>
        <Sidebar />
      </div>
    </header>
  );
}
