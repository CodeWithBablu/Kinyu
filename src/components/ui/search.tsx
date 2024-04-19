'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

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

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="flex flex-1 flex-shrink-0 items-center">
      <label
        htmlFor="search"
        className="mr-5 hidden font-comfortaa text-lg font-semibold md:block"
      >
        Search
      </label>

      <div className="relative flex w-full">
        <input
          id="search"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('query')?.toString()}
          className="peer relative block w-full rounded-md rounded-e-md border-2 border-gray-600/60 bg-zinc-700/30 py-[15px] pl-10 text-sm text-gray-200 outline-none placeholder:text-gray-300 focus:border-blue-600 md:w-64 lg:w-80"
          placeholder={placeholder}
          type="text"
        />

        <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 peer-focus:text-gray-200" />
      </div>
    </div>
  );
}
