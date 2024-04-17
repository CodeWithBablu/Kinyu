"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {

  /*
  NOTE:  There are a couple of benefits of implementing search with URL params:

  -Bookmarkable and Shareable URLs: Since the search parameters are in the URL, users can bookmark the current state of the application, including their search queries and filters, for future reference or sharing.
  -Server-Side Rendering and Initial Load: URL parameters can be directly consumed on the server to render the initial state, making it easier to handle server rendering.
  -Analytics and Tracking: Having search queries and filters directly in the URL makes it easier to track user behavior without requiring additional client-side logic.
  */
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-1 items-center flex-shrink-0">
      <label htmlFor="search" className="hidden md:block font-comfortaa font-semibold text-lg mr-5">Search</label>

      <div className="relative flex">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('query')?.toString()}
          className="relative peer block w-full rounded-e-md py-[15px] pl-10 text-sm outline-none text-gray-200 bg-zinc-700/60 border-2 border-gray-600/60 focus:border-blue-600 placeholder:text-gray-300 rounded-md" placeholder={placeholder} type="text" />

        <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 peer-focus:text-gray-200" />

      </div>
    </div>
  );
}