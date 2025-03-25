import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children }: ButtonProps) {
  return (
    <button className="flex flex-row py-2 px-7 text-primary bg-white rounded-full items-center justify-center gap-2 hover:cursor-pointer">
      {children}
    </button>
  );
}
