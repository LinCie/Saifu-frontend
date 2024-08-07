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
        primary: ["bg-primary-900"],
        secondary: ["bg-secondary-600"],
        danger: ["bg-danger-600"],
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
