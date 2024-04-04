import { cn } from "@/utils/cn";
import { forwardRef, MouseEventHandler, RefAttributes } from "react";
import type { ReactNode, FC } from "react";

export interface ButtonProps extends RefAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  variant?: "default" | "twoTone" | "plain" | "outline";
  size?: "xs" | "sm" | "md" | "lg";
  shape?: "round" | "circle" | "none";
  loading?: boolean;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  onClick,
  type = "button",
  variant = "default",
  size = "md",
  loading = false,
  shape = "round",
  disabled = false,
  className = "",
  children,
  block = false,
  ref,
}) => {
  const buttonClasses = cn(
    "px-2 py-1 capitalize transition duration-150 border border-white rounded-lg hover:bg-white/15 active:scale-95",
    {
      "bg-blue-500 text-white border-2 border-transparent hover:bg-blue-500":
        variant === "default",
      "bg-transparent text-blue-500 border-2 border-blue-500 hover:text-blue-500":
        variant === "twoTone",
      "bg-transparent text-current": variant === "plain",
      "bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white":
        variant === "outline",
      "px-5 py-2 text-base sm:leading-8 sm:text-lg": size === "md",
      "px-4 py-2 text-sm sm:leading-7 sm:text-base": size === "sm",
      "px-3 py-1 text-xs sm:leading-6 sm:text-sm": size === "xs",
      "px-6 py-3 text-xl sm:leading-9 sm:text-2xl": size === "lg",
      "rounded-lg": shape === "round",
      "rounded-full": shape === "circle",
      "rounded-none": shape === "none",
      "cursor-not-allowed": disabled || loading,
      "w-full": block,
    },
    className,
  );
  return (
    <button
      type={type}
      disabled={disabled}
      ref={ref}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
