import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'pill' | 'dark' | 'outline';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'pill',
  className,
  href,
  onClick,
}) => {
  const variants = {
    pill: 'pill-btn-olive',
    dark: 'pill-btn-dark',
    outline: 'inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-warm-300 text-warm-700 hover:bg-warm-200 transition-all duration-300',
  };

  const classes = cn(variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
