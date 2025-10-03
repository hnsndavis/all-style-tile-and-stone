import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-black text-white hover:bg-gray-900',
      secondary: 'bg-white text-black border-2 border-black hover:bg-gray-50',
      accent: 'bg-[#B87333] text-white hover:bg-[#9A5F28]',
      outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm min-h-[40px]',
      md: 'px-6 py-3 text-base min-h-[48px]',
      lg: 'px-8 py-4 text-lg min-h-[56px]',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && typeof children === 'object' && children !== null && 'props' in children) {
      const childProps = (children as any).props;
      return {
        ...children,
        props: {
          ...childProps,
          className: cn(classes, childProps.className),
        },
      } as any;
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
