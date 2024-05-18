import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BlockProps {
  children?: ReactNode;
  type?: 'default' | 'warning' | 'danger';
}

export function Block({ children, type = 'default', ...props }: BlockProps) {
  return (
    <div
      className={cn(
        'my-4 items-start rounded-md border boder-l-4 py-2 px-4 w-full dark:max-w-none',
        {
          'border-red-900 bg-red-200 dark:prose': type === 'danger',
          'border-yellow-900 bg-yellow-200 dark:prose': type === 'warning',
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
