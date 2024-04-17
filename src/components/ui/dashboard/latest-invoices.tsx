import { fetchLatestInvoices } from "@/lib/data";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

export default async function LatestInvoices() {

  const lastestInvoices = await fetchLatestInvoices();

  return (
    <div className=" md:col-span-4">

      <h1 className="mb-4 text-gray-200 font-caveat font-semibold text-3xl">Latest Invoices</h1>

      {/* invoice container */}
      <div className=" flex grow flex-col bg-zinc-800/60 p-2 rounded-lg">

        <div className='px-4 rounded-md bg-zinc-900'>

          {
            lastestInvoices.map((invoice, index) => (
              <div key={invoice.id} className={clsx(
                `flex justify-between items-center py-3`,
                { 'border-t border-gray-400': index !== 0 }
              )}>

                <div className="flex items-center">
                  <Image src={invoice.image_url} alt={invoice.name} className=" mr-4 rounded-full" width={32} height={32} />

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{invoice.name}</p>
                    <p className="hidden text-sm text-gray-400/80 sm:block">{invoice.email}</p>
                  </div>
                </div>

                <p
                  className={`truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p>

              </div>
            ))
          }

        </div>

      </div>

      <div className="flex items-center h-10 font-medium">
        <ArrowPathIcon className="h-5 w-5 text-gray-500" />
        <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
      </div>

    </div>
  );
}