import { cva } from "class-variance-authority";

export const buttonOutlineVariants = cva(
  [
    "transition",
    "ease-in-out",
    "duration-150",
    "rounded",
    "outline",
    "outline-1",
    "hover:opacity-95",
    "active:opacity-70",
    "dark:text-slate-100",
    "dark:outline-slate-100",
    "dark:hover:text-slate-700",
    "dark:hover:bg-slate-100",
  ],
  {
    variants: {
      color: {
        primary: [
          "text-primary-900",
          "outline-primary-900",
          "hover:text-slate-100",
          "hover:bg-primary-900",
        ],
        secondary: [
          "text-secondary-600",
          "outline-secondary-600",
          "hover:text-slate-100",
          "hover:bg-secondary-600",
        ],
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
