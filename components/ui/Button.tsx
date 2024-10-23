"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  rightIcon?: boolean;
}

const getButtonClasses = (variant: ButtonVariant): string => {
  const baseClasses =
    "inline-flex items-center border border-[2px] justify-center rounded-full text-sm transition-all duration-300 ease-in-out h-10 py-2 px-6";

  const variantClasses = {
    primary:
      "font-bold border-main text-main hover:bg-main hover:text-secondary-light hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
    secondary:
      "font-bold border-secondary-light text-secondary-light hover:bg-secondary-light hover:text-secondary-orange-dark hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
    icon: "h-8 w-8 bg-transparent border-secondary-light text-secondary-light rounded-full px-2 py-2 hover:bg-secondary-light hover:text-secondary-orange-dark hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
  };

  return `${baseClasses} ${variantClasses[variant]}`;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
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
        className={`${getButtonClasses(variant)} ${className}`}
      >
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
