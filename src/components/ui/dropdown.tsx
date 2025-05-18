import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DropdownProps {
  trigger: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function Dropdown({ trigger, open, onOpenChange, children, className }: DropdownProps) {
  return (
    <div className="relative inline-block text-left">
      <div onClick={() => onOpenChange(!open)}>{trigger}</div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className={cn('absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black/5 focus:outline-none', className)}
            role="menu"
            tabIndex={-1}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 