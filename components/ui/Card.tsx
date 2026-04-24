import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  hover = true,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-lg border border-neutral-100 p-8 transition-all duration-300',
        hover && 'hover:shadow-xl hover:-translate-y-2',
        className
      )}
    >
      {children}
    </div>
  );
};
