import React from "react";
import { cn } from "@/utilities";
import { inputVariants } from "@/variants";
import { ComponentPropsWithoutRef } from "react";

export interface TextInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  color: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
  isError: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ color, size, className, isError, ...props }: TextInputProps, ref) => {
    return (
      <input
        className={cn(
          inputVariants({
            color: isError ? "danger" : color,
            size: size,
          }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
