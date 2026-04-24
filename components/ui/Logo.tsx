import { FC } from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'dark' | 'light';
}

export const Logo: FC<LogoProps> = ({ className, iconOnly = false, variant = 'dark' }) => {
  const isLight = variant === 'light';

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* Geometric K icon */}
      <svg
        width={iconOnly ? '56' : '48'}
        height={iconOnly ? '56' : '48'}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer hexagon */}
        <path
          d="M25 5L40 15V35L25 45L10 35V15L25 5Z"
          stroke={isLight ? '#ffffff' : '#ffffff'}
          strokeWidth="2"
          fill="none"
        />
        {/* K letter */}
        <path
          d="M18 15V35M18 25L32 15M18 25L32 35"
          stroke={isLight ? '#ffffff' : '#ffffff'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Node dots */}
        <circle cx="25" cy="15" r="3" fill={isLight ? '#2EC4B6' : '#2EC4B6'} />
        <circle cx="25" cy="25" r="3" fill={isLight ? '#2EC4B6' : '#2EC4B6'} />
        <circle cx="25" cy="35" r="3" fill={isLight ? '#2EC4B6' : '#2EC4B6'} />
        {/* Connections */}
        <path
          d="M25 18V22M25 28V32"
          stroke={isLight ? '#2EC4B6' : '#2EC4B6'}
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col">
          <span className={`text-xl font-bold tracking-tight leading-none ${isLight ? 'text-white' : 'text-white'}`}>
            Knecht & Partners
          </span>
          <span className={`text-xs tracking-widest uppercase ${isLight ? 'text-white/50' : 'text-white/50'}`}>
            AB
          </span>
        </div>
      )}
    </div>
  );
};
