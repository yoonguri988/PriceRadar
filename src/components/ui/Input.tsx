/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";
import {
  baseInput,
  errorStyle,
  sizeStyle,
  labelStyle,
  iconWrapper,
  helperTextStyle,
  errorMessageStyle,
} from "@/styles/components/ui/Input.styles";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  error?: string;
  label?: string;
  icon?: ReactNode;
  helperText?: string;
  css?: SerializedStyles | SerializedStyles[];
}

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
        <label htmlFor={inputId} css={labelStyle}>
          {label}
        </label>
      )}
      <div css={icon ? iconWrapper : undefined}>
        {icon && <span className="icon">{icon}</span>}
      </div>
      <input
        id={inputId}
        css={[baseInput, sizeStyle[size], error && errorStyle]}
        aria-invalid={!!error}
        aria-describedby={helperText || error ? descriptionId : undefined}
        {...props}
      />
      {error ? (
        <p css={errorMessageStyle} id={descriptionId}>
          {error}
        </p>
      ) : helperText ? (
        <p css={helperTextStyle} id={descriptionId}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
