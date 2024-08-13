import { cn } from "@/utilities";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "./Theme";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  function handleThemeToggle() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <div onClick={handleThemeToggle} className="cursor-pointer">
      <SunIcon
        className={cn(
          "absolute size-10 md:size-8",
          "transition-opacity duration-100 ease-in-out",
          theme === "dark" ? "opacity-0" : "opacity-100",
        )}
      />
      <MoonIcon
        className={cn(
          "relative size-10 md:size-8",
          "transition-opacity duration-100 ease-in-out",
          theme === "dark" ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
