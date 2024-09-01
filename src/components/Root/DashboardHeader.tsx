import { cn } from "@/utilities";
import { Link, useLocation } from "react-router-dom";

interface IDashboardLinks {
  to: string;
  text: string;
}

const dashboardLinks: IDashboardLinks[] = [
  { to: "/dashboard", text: "Overview" },
];

export function DashboardHeader() {
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 top-0 z-[99] hidden gap-3 bg-background/70 px-10 pt-14 backdrop-blur md:flex">
      {dashboardLinks.map((link) => (
        <Link
          key={link.text}
          to={link.to}
          className={cn(
            "hidden text-sm hover:text-primary/80 md:block",
            location.pathname === link.to ? "text-primary" : "text-foreground",
          )}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
