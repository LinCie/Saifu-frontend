import { Bars3Icon, WalletIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "../Theme/ThemeToggle";

export function RootHeader() {
  return (
    <header className="bg-primary-900/70 fixed inset-x-0 top-0 z-[100] px-3 py-2 text-white backdrop-blur-sm md:px-4 md:py-3 dark:bg-gray-800">
      <div className="flex items-center">
        <div className="flex select-none items-center gap-1">
          <WalletIcon className="size-8 md:size-9" />
          <div className="text-xl font-bold">Open Wallet</div>
        </div>
        <div className="flex-1"></div>
        <span className="hidden md:block">
          <ThemeToggle />
        </span>
        <Bars3Icon className="size-10 md:hidden" />
      </div>
    </header>
  );
}
