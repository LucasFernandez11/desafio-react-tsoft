import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  as?: React.ElementType;
  to?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-red-600 hover:bg-red-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  outline: 'bg-transparent border border-gray-600 hover:bg-gray-800 text-white',
  ghost: 'bg-transparent hover:bg-gray-800 text-white',
  danger: 'bg-red-900/20 border border-red-900/30 hover:bg-red-900/30 text-red-400',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', as: Component = 'button', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variantClass = variantClasses[variant] || variantClasses.primary;

    if (Component === 'a' || Component === Link) {
      const linkProps = props as LinkProps;
      return (
        <Link
          to={linkProps.to || '#'}
          className={`${baseClasses} ${variantClass} ${className}`}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...linkProps as Omit<LinkProps, 'to' | 'ref'>}
        >
          {children}
        </Link>
      );
    }

    return (
      <Component
        className={`${baseClasses} ${variantClass} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';
