/** @jsxImportSource @emotion/react */
import * as styles from "@/components/ui/Button.styles";
import { ButtonProps } from "@/types/ui.types";

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
      css={[styles.base, styles.sizes[size], styles.variant[variant]]}
      {...props}
    >
      {isLoading && <span css={styles.spinner} aria-hidden />}
      {!isLoading && icon && iconPosition === "left" && (
        <span css={styles.iconLeft}>{icon}</span>
      )}
      {children}
      {!isLoading && icon && iconPosition === "right" && (
        <span css={styles.iconRight}>{icon}</span>
      )}
    </button>
  );
};
