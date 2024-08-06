import { cn } from "@/utilities";
import { inputVariants } from "@/variants";
import { ComponentPropsWithoutRef } from "react";

export interface TextInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  color: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
  isError: boolean;
}

export function TextInput({
  color,
  size,
  className,
  isError,
  ...props
}: TextInputProps) {
  return (
    <input
      className={cn(
        inputVariants({
          color: isError ? "danger" : color,
          size: size,
        }),
        className,
      )}
      {...props}
    />
  );
}
