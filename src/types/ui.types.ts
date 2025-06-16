import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { SerializedStyles } from "@emotion/react";
import { FilterOption, SortOption } from "@/features/product";

export type EmptyState = {
  icon?: ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

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

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
  error?: string;
  label?: string;
  icon?: ReactNode;
  helperText?: string;
  css?: SerializedStyles | SerializedStyles[];
}

export type SortFilterControlsProps = {
  sort: SortOption;
  setSort: (sort: SortOption) => void;
  filter: FilterOption;
  setFilter: (filter: FilterOption) => void;
};
