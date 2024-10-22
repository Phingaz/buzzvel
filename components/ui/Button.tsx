"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rightIcon?: boolean;
}

const getButtonClasses = (variant: ButtonVariant, size: ButtonSize): string => {
  const baseClasses =
    "inline-flex items-center border border-[2px] justify-center rounded-full text-sm transition-all duration-300 ease-in-out";

  const variantClasses = {
    primary:
      "font-bold border-main text-main hover:bg-main hover:text-secondary-light hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
    secondary:
      "font-bold border-secondary-light text-secondary-light hover:bg-secondary-light hover:text-secondary-orange-dark hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)];",
  };

  const sizeClasses = { default: "h-10 py-2 px-6" };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "default",
      rightIcon = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={`${getButtonClasses(variant, size)} ${className}`}
      >
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
