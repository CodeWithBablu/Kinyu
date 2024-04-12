"use client"

import { usePathname } from "next/navigation";
import { HomeIcon, UserGroupIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";

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
  }
]

export default function NavLinks() {
  const path = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link key={link.name} href={link.href} className={clsx(
            'flex h-[50px] grow items-center justify-center gap-2 p-3 rounded-md text-sm font-medium text-gray-300 bg-zinc-800 md:bg-transparent hover:bg-gradient-to-r hover:from-blue-800/70  hover:text-gray-100 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-zinc-800 bg-gradient-to-r from-blue-800/70 from-50% to-blue-700 md:to-transparent text-gray-100': path === link.href,
            },

          )}>
            <LinkIcon className="w-5" />
            <p className="hidden md:block tracking-widest">{link.name}</p>
          </Link>
        )
      })}
    </>
  );
}