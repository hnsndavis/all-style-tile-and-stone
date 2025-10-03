import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  className,
  hover = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-gray-100 overflow-hidden',
        hover && 'transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
