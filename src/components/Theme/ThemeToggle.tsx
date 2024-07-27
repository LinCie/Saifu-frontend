import { cn } from "@/utilities";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface ThemeToggleProps {
  darkMode: {
    isDarkMode: boolean;
    handleThemeToggle: () => void;
  };
}

export function ThemeToggle({ darkMode }: ThemeToggleProps) {
  return (
    <div onClick={darkMode.handleThemeToggle} className="cursor-pointer">
      <SunIcon
        className={cn(
          "absolute size-8",
          "transition-opacity duration-100 ease-in-out",
          darkMode.isDarkMode ? "opacity-0" : "opacity-100",
        )}
      />
      <MoonIcon
        className={cn(
          "relative size-8",
          "transition-opacity duration-100 ease-in-out",
          darkMode.isDarkMode ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
