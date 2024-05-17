'use client';

import { siteConfig } from '@/config/site';
import { Icons } from './icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className='flex items-center space-x-2 lg:space-x-4'>
      <Link href='/' className='mr-2 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <Link
        href='/'
        className={cn(
          'text-sm font-medium transition-colors py-2 px-4 hover:bg-gray-200 hover:text-primary rounded',
          pathname === '/'
            ? 'text-foreground bg-gray-200'
            : 'text-foreground/60'
        )}
      >
        Home
      </Link>
      <Link
        href='/blog'
        className={cn(
          'text-sm font-medium transition-colors py-2 px-4 hover:bg-gray-200 hover:text-primary rounded',
          pathname === '/blog'
            ? 'text-foreground bg-gray-200 '
            : 'text-foreground/60'
        )}
      >
        Blog
      </Link>
    </nav>
  );
}
