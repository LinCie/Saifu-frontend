import { cn } from "@/utilities";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export function ThemeToggle() {
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
    <div onClick={handleThemeToggle} className="cursor-pointer">
      <SunIcon
        className={cn(
          "absolute size-8",
          "transition-opacity duration-100 ease-in-out",
          isDarkMode ? "opacity-0" : "opacity-100",
        )}
      />
      <MoonIcon
        className={cn(
          "relative size-8",
          "transition-opacity duration-100 ease-in-out",
          isDarkMode ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
