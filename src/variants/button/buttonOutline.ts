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
    "dark:outline-slate-100",
    "dark:hover:text-slate-700",
    "dark:hover:bg-slate-100",
  ],
  {
    variants: {
      color: {
        primary: [
          "outline-primary",
          "hover:text-slate-100",
          "hover:bg-primary",
        ],
        secondary: [
          "text-secondary",
          "outline-secondary",
          "hover:text-slate-100",
          "hover:bg-secondary",
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
