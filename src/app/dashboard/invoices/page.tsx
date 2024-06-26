import { CreateInvoice } from '@/components/ui/invoices/buttons';
import Pagination from '@/components/ui/invoices/paginations';
import InvoicesTable from '@/components/ui/invoices/table';
import Search from '@/components/ui/search';
import { InvoicesTableSkeleton } from '@/components/ui/skeletons';
import { fetchInvoicesPages } from '@/lib/data';
import { Suspense } from 'react';

export default async function Invoices({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className=" font-poppins text-2xl font-medium">Invoices</h1>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
      </div>

      <div className=' my-2 flex justify-end'>
        <CreateInvoice />
      </div>

      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
