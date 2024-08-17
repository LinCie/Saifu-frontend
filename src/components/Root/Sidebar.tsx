import {
  Bars3Icon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "../ui/sheet";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { Separator } from "../ui/separator";
import * as React from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "@/utilities";
import { SignOutContext, UserContext } from "@/contexts";

interface SidebarLinkProps extends LinkProps {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

function SidebarLink({ icon, to, children, ...props }: SidebarLinkProps) {
  const Icon = React.cloneElement(icon, { className: cn("size-8") });

  return (
    <Link to={to} {...props}>
      <SheetClose className="mb-6 flex w-full items-center justify-center gap-3">
        {Icon}
        <div className="flex-1 text-start text-xl font-bold">{children}</div>
        <ChevronRightIcon className="size-6" />
      </SheetClose>
    </Link>
  );
}

export function Sidebar() {
  const userContext = React.useContext(UserContext);
  const signOutContext = React.useContext(SignOutContext);

  return (
    <Sheet>
      <SheetTrigger>
        <Bars3Icon className="size-10 md:hidden" />
      </SheetTrigger>
      <SheetContent className="z-[100] flex w-96 flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold md:text-lg">
            Open Wallet Navigation
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-2" />
        <div className="flex-1">
          {userContext?.user ? (
            <>
              <SidebarLink
                onClick={signOutContext?.handleSignOut}
                to="/signin"
                icon={<UserIcon />}
              >
                Sign out
              </SidebarLink>
            </>
          ) : (
            <>
              <SidebarLink to="/signin" icon={<UserIcon />}>
                Sign In
              </SidebarLink>
              <SidebarLink to="/signup" icon={<UserIcon />}>
                Sign Up
              </SidebarLink>
            </>
          )}
        </div>
        <Separator className="my-2" />
        <SheetFooter className="flex items-end">
          <ThemeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
