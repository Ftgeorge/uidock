import * as React from 'react';
import { cn, getInitials } from '@/lib/utils';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: number;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, name, size = 40, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden',
          className
        )}
        style={{ width: size, height: size }}
        aria-label={name}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt || name}
            className="object-cover w-full h-full"
            width={size}
            height={size}
          />
        ) : name ? (
          <span className="text-lg select-none">{getInitials(name)}</span>
        ) : (
          <span className="text-lg select-none">?</span>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar'; 