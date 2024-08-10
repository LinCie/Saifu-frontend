import { cn } from "@/utilities";
import { buttonOutlineVariants } from "@/variants";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex min-h-screen flex-col items-center justify-center gap-3 md:min-h-screen md:gap-5"
    >
      <h1
        className={cn(
          "max-w-6xl text-center text-5xl font-bold",
          "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-200",
        )}
      >
        Seamlessly Manage Your Finances Anytime, Anywhere
      </h1>
      <h2 className="max-w-2xl text-center text-xl">
        Register for free, start managing in seconds
      </h2>
      <button
        className={cn(
          buttonOutlineVariants({ color: "primary", size: "medium" }),
          "flex items-center gap-2 font-medium",
        )}
      >
        Get Started
        <ArrowRightIcon className="size-4" />
      </button>
    </section>
  );
}
