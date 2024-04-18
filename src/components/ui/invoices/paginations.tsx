"use client"

import { generatePagination } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNo: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNo.toString());
    return `${pathname}?${params.toString()}`;
  }

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex items-center -space-x-px">
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

export function PaginationNumber({ href, page, position, isActive }: {
  href: string;
  page: string | number;
  position: 'first' | 'last' | 'middle' | 'single' | undefined;
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border border-blue-600',
    {
      'rounded-l-lg': position == 'first' || position == 'single',
      'rounded-r-lg': position == 'last' || position == 'single',
      'hover:bg-gray-200 hover:text-zinc-900': !isActive && position !== 'middle',
      'text-gray-300': position == 'middle',
      'text-gray-100 bg-blue-600': isActive,
    },
  )

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>{page}</Link>
  )
}

export function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled: boolean,
}) {

  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded-md border',
    {
      'pointer-events-none text-zinc-400 border-zinc-700': isDisabled,
      'hover:bg-zinc-700 border-zinc-400': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  );

  const icon = direction === 'left' ? (
    <ArrowLeftIcon className="w-4" />
  ) : (
    <ArrowRightIcon className="w-4" />
  )

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link href={href} className={className}>{icon}</Link>
  )
}