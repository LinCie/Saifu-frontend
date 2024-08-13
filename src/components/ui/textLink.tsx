import { cn } from "@/utilities";
import { Link, LinkProps } from "react-router-dom";

export interface TextLinkProps extends LinkProps {}

export function TextLink({ className, to, children, ...props }: TextLinkProps) {
  return (
    <Link
      to={to}
      className={cn("text-primary visited:text-muted-foreground", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
