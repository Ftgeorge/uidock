import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'danger';
}

export function Alert({ className, variant = 'info', ...props }: AlertProps) {
  return (
    <div
      className={cn(
        'rounded-md p-4 text-sm',
        variant === 'info' && 'bg-blue-50 text-blue-800',
        variant === 'success' && 'bg-green-50 text-green-800',
        variant === 'warning' && 'bg-yellow-50 text-yellow-800',
        variant === 'danger' && 'bg-red-50 text-red-800',
        className
      )}
      role="alert"
      {...props}
    />
  );
} 