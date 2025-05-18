"use client"

import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MotionDiv } from './motion';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function Modal({ open, onClose, children, className, ariaLabel }: ModalProps) {
  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <MotionDiv
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-label={ariaLabel}
          tabIndex={-1}
          onClick={onClose}
        >
          <MotionDiv
            className={cn('bg-background rounded-lg shadow-lg p-6 max-w-lg w-full', className)}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            onClick={e => e.stopPropagation()}
          >
            {children}
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
} 