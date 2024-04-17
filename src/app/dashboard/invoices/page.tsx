import InvoicesTable from "@/components/ui/invoices/table";
import Search from "@/components/ui/search";
import { InvoicesTableSkeleton } from "@/components/ui/skeletons";
import { Suspense } from "react";

export default function Invoices({ searchParams }: {
  searchParams?: {
    query?: string;
    page?: string;
  }
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className=" font-poppins font-medium text-2xl">Invoices</h1>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
      </div>

      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        {/*  */}
      </div>
    </div>
  );
}
