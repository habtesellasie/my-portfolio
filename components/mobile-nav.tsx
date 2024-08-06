'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button, buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <MobileLink
          onOpenChange={setOpen}
          href='/'
          className='flex items-center'
        >
          <Icons.logo className='mr-2 h-4 w-4' />
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <div className='flex flex-col gap-2 mt-3'>
          <MobileLink
            onOpenChange={setOpen}
            href='/'
            className='px-2 py-2 hover:bg-gray-200 rounded hover:dark:bg-gray-800'
          >
            Home
          </MobileLink>
          <MobileLink
            onOpenChange={setOpen}
            href='/blog'
            className='px-2 py-2 hover:bg-gray-200 rounded hover:dark:bg-gray-800'
          >
            Blog
          </MobileLink>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
          <Link
            href={siteConfig.links.linkedin}
            target='_blank'
            rel='noreferrer'
          >
            <div
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'px-3 flex justify-start gap-2 w-full hover:bg-gray-200 hover:dark:bg-gray-800'
              )}
            >
              <Icons.linkedin className='size-6' />
              <span className=''>Linkedin</span>
            </div>
          </Link>
          <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <div
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'px-4 flex justify-start gap-2 w-full hover:bg-gray-200 hover:dark:bg-gray-800'
              )}
            >
              <Icons.gitHub className='h-4 w-4' />
              <span className=''>GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target='_blank'
            rel='noreferrer'
          >
            <div
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'px-4 flex justify-start gap-2 w-full hover:bg-gray-200 hover:dark:bg-gray-800'
              )}
            >
              <Icons.twitter className='h-4 w-4' />
              <span className=''>Twitter</span>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
