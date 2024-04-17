'use client';

import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: UserGroupIcon,
  },
];

export default function NavLinks() {
  const path = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[50px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-blue-600 shadow-xl shadow-indigo-600/60 text-gray-100':
                  path === link.href,
              },
              {
                'hover:bg-gradient-to-r hover:from-gray-600/50 text-gray-300 hover:text-gray-100':
                  path !== link.href
              }
            )}
          >
            <LinkIcon className="w-5" />
            <p className="hidden tracking-widest md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
