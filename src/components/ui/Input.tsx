import styles from "@/components/ui/Input.module.scss";
import { InputProps } from "@/types/ui.types";

/** Primary UI component for user interaction */
export const Input = ({
  size = "md",
  error,
  label,
  icon,
  helperText,
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  const descriptionId = `${inputId}-desc`;

  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <div className={icon ? styles[`icon-wrapper`] : undefined}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          id={inputId}
          className={`${styles[`size-${size}`]} ${error && styles.error}`}
          aria-invalid={!!error}
          aria-describedby={helperText || error ? descriptionId : undefined}
          {...props}
        />
      </div>
      {error ? (
        <p className={styles["error"]} id={descriptionId}>
          {error}
        </p>
      ) : helperText ? (
        <p className={styles["helper-text"]} id={descriptionId}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
