import { Button } from "@/components";
import { cn } from "@/utilities";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex min-h-screen flex-col items-center justify-center gap-3 md:min-h-screen md:gap-5"
    >
      <h1
        className={cn(
          "max-w-6xl text-center text-5xl font-bold",
          "bg-gradient-to-r from-primary to-primary/75 bg-clip-text text-transparent",
        )}
      >
        Seamlessly Manage Your Finances Anytime, Anywhere
      </h1>
      <h2 className="max-w-2xl text-center text-xl">
        Register for free, start managing in seconds
      </h2>
      <Link to="/dashboard">
        <Button variant="outline-default" className="gap-1">
          Get Started
          <ArrowRightIcon className="size-4" />
        </Button>
      </Link>
    </section>
  );
}
