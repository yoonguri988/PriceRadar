import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

export type EmptyStateProp = {
  icon?: ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  label?: string;
  icon?: ReactNode;
  helperText?: string;
}

export interface NavLinkProps {
  href: string;
  label: string;
}

export interface IconProps {
  isActive?: boolean;
}

export interface BadgeProps {
  text: string;
  color?: string; // 배경색(hex or tailwind)
}

export interface ToggleButtonProps {
  initial?: boolean;
  onToggle?: (active: boolean) => void;
}
