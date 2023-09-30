import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';

export default function Navigation() {
  return (
    <nav className="fixed p-8">
      <ul className="flex flex-row justify-start items-center gap-2">
        <li>
          <NavigationLink href="/">Home</NavigationLink>
        </li>
        <li>
          <NavigationLink href="/blog">Blog</NavigationLink>
        </li>
        <li>
          <NavigationLink href="/projects">Projects</NavigationLink>
        </li>
      </ul>
    </nav>
  );
}

function NavigationLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: 'ghost',
        })
      )}
    >
      {children}
    </Link>
  );
}
