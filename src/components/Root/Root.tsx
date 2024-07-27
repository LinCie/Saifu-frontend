import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { RootHeader } from "./RootHeader";

export function Root() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.getElementById("root")?.classList.add("dark");
    } else {
      document.getElementById("root")?.classList.remove("dark");
    }

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  function handleThemeToggle() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <>
      <RootHeader darkMode={{ isDarkMode, handleThemeToggle }} />
      <main className="min-h-screen bg-slate-100 dark:bg-gray-700">
        <Outlet />
      </main>
    </>
  );
}
