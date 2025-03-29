import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: "primary" | "white";
}

export function Button({
  children,
  fill = "white",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "flex flex-row py-2 px-7 rounded-full items-center justify-center gap-2 hover:cursor-pointer",
        "bg-" + fill,
        fill === "white" && "text-primary",
        fill === "primary" && "text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
