import { Outlet } from "react-router-dom";
import { RootHeader } from "./RootHeader";

export function Root() {
  return (
    <>
      <RootHeader />
      <main className="min-h-screen bg-slate-100 px-2 text-slate-700 dark:bg-gray-700 dark:text-slate-200">
        <Outlet />
      </main>
    </>
  );
}
