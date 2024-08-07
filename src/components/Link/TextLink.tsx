import { cn } from "@/utilities";
import { Link, LinkProps } from "react-router-dom";

export interface TextLinkProps extends LinkProps {}

export function TextLink({ className, to, children, ...props }: TextLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "text-primary-700 visited:text-secondary-600 dark:text-primary-400 dark:visited:text-secondary-500",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
