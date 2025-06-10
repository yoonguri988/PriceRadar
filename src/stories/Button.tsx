/** @jsxImportSource @emotion/react */
import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  baseStyle,
  variantStyle,
  sizeStyle,
  iconLeftStyle,
  iconRightStyle,
  spinnerStyle,
} from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  iconPosition = "left",
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      css={[baseStyle, sizeStyle[size], variantStyle[variant]]}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && <span css={spinnerStyle} aria-hidden />}
      {!isLoading && icon && iconPosition === "left" && (
        <span css={iconLeftStyle}>{icon}</span>
      )}
      {children}
      {!isLoading && icon && iconPosition === "right" && (
        <span css={iconRightStyle}>{icon}</span>
      )}
    </button>
  );
};
