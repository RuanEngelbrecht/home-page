import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { LucideIcon } from 'lucide-react';

export default function SocialButton({
  icon,
  href,
}: {
  icon: LucideIcon;
  href: string;
}) {
  return (
    <Link
      className={cn(
        buttonVariants({
          size: 'icon',
          variant: 'outline',
        })
      )}
      href={href}
      target="_blank"
    >
      {React.createElement(icon, { className: 'h-5 w-5' })}
    </Link>
  );
}
