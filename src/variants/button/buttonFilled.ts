import { cva } from "class-variance-authority";

export const buttonFilledVariants = cva(
  [
    "transition",
    "ease-in-out",
    "duration-150",
    "rounded",
    "hover:opacity-95",
    "active:opacity-70",
    "text-slate-100",
    "dark:text-slate-700",
    "dark:bg-slate-100",
    "dark:hover:bg-slate-200",
  ],
  {
    variants: {
      color: {
        primary: ["bg-primary"],
        secondary: ["bg-secondary"],
        danger: ["bg-destructive"],
      },
      size: {
        small: ["px-2", "py-1"],
        medium: ["px-3", "py-2"],
        large: ["px-5", "py-3"],
      },
    },
    defaultVariants: {
      color: "primary",
      size: "medium",
    },
  },
);
