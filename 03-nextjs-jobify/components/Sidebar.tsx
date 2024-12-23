'use client';

import Image from 'next/image';
import logo from '../assets/logo.svg';
import links from '@/utils/links';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Image src={logo} alt="logo" className="mx-auto" />
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => {
          const { href, label, icon } = link;
          return (
            <Button
              asChild
              key={href}
              variant={pathname === href ? 'default' : 'link'}
            >
              <Link href={href} className="flex items-center gap-x-2">
                {icon} <span className="capitalize">{label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
