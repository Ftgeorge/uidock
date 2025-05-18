import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

export function Progress({ value, max = 100, className, ...props }: ProgressProps) {
  return (
    <div className={cn('w-full h-2 bg-muted rounded', className)} {...props}>
      <div
        className="h-2 rounded bg-primary transition-all"
        style={{ width: `${(value / max) * 100}%` }}
        aria-valuenow={value}
        aria-valuemax={max}
        aria-valuemin={0}
        role="progressbar"
      />
    </div>
  );
} 