import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'danger';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-primary text-primary-foreground',
        variant === 'secondary' && 'bg-muted text-foreground',
        variant === 'success' && 'bg-green-500/10 text-green-700',
        variant === 'warning' && 'bg-yellow-500/10 text-yellow-700',
        variant === 'danger' && 'bg-red-500/10 text-red-700',
        className
      )}
      {...props}
    />
  );
} 