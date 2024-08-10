import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "rounded",
    "outline",
    "outline-1",
    "bg-transparent",
    "outline-slate-700",
    "dark:outline-slate-100",
    "dark:focus:outline-slate-100",
  ],
  {
    variants: {
      color: {
        primary: ["focus:outline-primary"],
        secondary: ["focus:outline-secondary"],
        danger: ["focus:outline-danger-600"],
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
