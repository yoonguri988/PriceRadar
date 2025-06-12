/** @jsxImportSource @emotion/react */
import * as styles from "@/components/ui/Input.styles";
import { InputProps } from "@/types/ui.types";

/** Primary UI component for user interaction */
export const Input = ({
  size = "md",
  error,
  label,
  icon,
  css,
  helperText,
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  const descriptionId = `${inputId}-desc`;

  return (
    <div>
      {label && (
        <label htmlFor={inputId} css={styles.label}>
          {label}
        </label>
      )}
      <div css={icon ? styles.iconWrapper : undefined}>
        {icon && <span className="icon">{icon}</span>}
      </div>
      <input
        id={inputId}
        css={[styles.base, styles.sizes[size], error && styles.error]}
        aria-invalid={!!error}
        aria-describedby={helperText || error ? descriptionId : undefined}
        {...props}
      />
      {error ? (
        <p css={styles.errorMsg} id={descriptionId}>
          {error}
        </p>
      ) : helperText ? (
        <p css={styles.helperText} id={descriptionId}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
