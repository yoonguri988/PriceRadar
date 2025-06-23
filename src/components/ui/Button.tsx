import { ButtonProps } from '@/types/ui.types';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button className={``} disabled={isDisabled} {...props}>
      {isLoading && <span className={``} aria-hidden />}
      {!isLoading && icon && iconPosition === 'left' && (
        <span className={``}>{icon}</span>
      )}
      {children}
      {!isLoading && icon && iconPosition === 'right' && (
        <span className={``}>{icon}</span>
      )}
    </button>
  );
};
