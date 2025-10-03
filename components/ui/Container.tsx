import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'default' | 'narrow' | 'wide' | 'full';
}

export default function Container({
  className,
  maxWidth = 'default',
  children,
  ...props
}: ContainerProps) {
  const maxWidths = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        maxWidths[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
