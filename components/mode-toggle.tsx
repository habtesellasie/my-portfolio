'use client';

import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { LaptopMinimal, Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='w-10 px-0 sm:ml-2 max-sm:mr-2'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          className='flex gap-3'
          onClick={() => setTheme('light')}
        >
          <Sun size={15} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex gap-3'
          onClick={() => setTheme('dark')}
        >
          <Moon size={15} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex gap-3'
          onClick={() => setTheme('system')}
        >
          <LaptopMinimal size={15} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
