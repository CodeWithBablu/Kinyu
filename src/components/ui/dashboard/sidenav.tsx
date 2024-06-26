import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavLinks from './nav-links';
import {
  GlobeAltIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { signOut } from '../../../../auth';

export default function Sidenav() {
  return (
    <div className=" flex h-full flex-col bg-zinc-900 px-3 py-3 shadow-2xl md:px-2">
      <Link
        className="mb-2 z-10 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/"
      >
        <div className=" flex w-32 items-center gap-2 text-white md:w-40">
          <GlobeAltIcon className=" w-6" />
          <h1 className="font-caveat text-[1.5rem] font-semibold md:text-[2.5rem]">
            KinYu
          </h1>
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form action={async () => {
          'use server';
          await signOut();
        }}>
          <button className="flex h-[50px] w-full grow  items-center justify-center gap-2 rounded-md bg-transparent p-3 text-sm font-medium text-gray-300 hover:bg-rose-100 hover:text-rose-600 md:flex-none md:justify-start md:bg-zinc-700/40 md:p-2 md:px-3">
            <ArrowRightStartOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
