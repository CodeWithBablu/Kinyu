'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="h-full">
      <h1 className=" font-caveat text-2xl font-bold">ERROR</h1>
      <div className=" flex w-full flex-grow flex-col items-center justify-center">
        <div className=" flex flex-col items-center gap-5 font-poppins font-medium">
          <Image
            className=" h-auto w-auto"
            src="/error/oops.png"
            priority={true}
            alt="oops"
            height={300}
            width={300}
          />
          <h1 className=" font-neumachina text-center text-xl xl:text-3xl">
            Uh-oh! It appears this page has ghosted us.
          </h1>
          <h1 className=" font-neumachina text-center text-xl xl:text-3xl">
            Maybe it&apos;s off haunting the interwebs!
          </h1>

          <div className=" mt-10 flex flex-col gap-5 text-left">
            <h1 className=" text-xl font-semibold text-emerald-500">
              Here is what we know... 🧐
            </h1>
            <span>
              <b className=" text-lime-400">Path : </b>
              {pathname}
            </span>
            <span>
              <b className=" text-rose-400">Err : </b>
              {error.message}
            </span>
          </div>

          <button
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            onClick={
              // Attempt to recover by trying to re-render the invoices route
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
