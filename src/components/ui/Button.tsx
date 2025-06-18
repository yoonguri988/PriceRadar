import styles from "@/components/ui/Button.module.scss";
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
      className={`${styles.base} ${styles["variant-primary"]} ${styles["size-md"]}`}
      {...props}
    >
      {isLoading && <span className={styles.spinner} aria-hidden />}
      {!isLoading && icon && iconPosition === "left" && (
        <span className={styles["icon-left"]}>{icon}</span>
      )}
      {children}
      {!isLoading && icon && iconPosition === "right" && (
        <span className={styles["icon-right"]}>{icon}</span>
      )}
    </button>
  );
};
