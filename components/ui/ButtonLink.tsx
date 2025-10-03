import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function ButtonLink({
  href,
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonLinkProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200';

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

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
