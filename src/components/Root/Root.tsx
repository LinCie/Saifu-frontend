import { Outlet } from "react-router-dom";
import { RootHeader } from "./RootHeader";

export function Root() {
  return (
    <>
      <RootHeader />
      <main className="min-h-screen bg-slate-100 px-2 dark:bg-gray-700">
        <Outlet />
      </main>
    </>
  );
}
