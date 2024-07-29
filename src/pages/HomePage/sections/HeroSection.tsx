import { cn } from "@/utilities";
import { button } from "@/variants";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex min-h-screen flex-col items-center justify-center gap-3 md:min-h-screen md:gap-5"
    >
      <h1
        className={cn(
          "max-w-5xl text-center text-4xl font-bold md:text-6xl",
          "bg-gradient-to-r from-primary-900 to-secondary-600 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-200",
        )}
      >
        Seamlessly Manage Your Finances Anytime, Anywhere
      </h1>
      <h2 className="max-w-2xl text-center text-lg md:text-xl">
        Register for free, start managing in seconds
      </h2>
      <button
        className={cn(
          button({ color: "primary", size: "medium" }),
          "flex items-center gap-2 font-medium",
        )}
      >
        Get Started
        <ArrowRightIcon className="size-4" />
      </button>
    </section>
  );
}
