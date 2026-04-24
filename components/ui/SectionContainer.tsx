import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32',
        className
      )}
    >
      {children}
    </section>
  );
};
