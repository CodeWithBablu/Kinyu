import { fetchRevenue } from '@/lib/data';
import RevenueChart from '@/components/ui/dashboard/revenue-chart';
import LatestInvoices from '@/components/ui/dashboard/latest-invoices';
import CardWrapper from '@/components/ui/dashboard/cards';
import { Suspense } from 'react';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/components/ui/skeletons';

export default async function DashBoard() {
  {
    /*NOTE:
  Where you place your Suspense boundaries will depend on a few things:

    1.How you want the user to experience the page as it streams.
    2.What content you want to prioritize.
    3.If the components rely on data fetching.

  :You could stream the whole page with loading.tsx... but that may lead to a longer loading time if one of the components has a slow data fetch.
  :You could stream every component individually... but that may lead to UI popping into the screen as it becomes ready.
  :You could also create a staggered effect by streaming page sections. But you'll need to create wrapper components.

  -Where you place your suspense boundaries will vary depending on your application. In general, 
    it's good practice to move your data fetches down to the components that need it, and then wrap those components in Suspense. 
  -But there is nothing wrong with streaming the sections or the whole page if that's what your application needs.
*/
  }

  return (
    <main className="w-full">
      <h1 className=" mb-3 font-poppins text-2xl font-medium">Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/*NOTE: 
          We make use of streaming in nextjs here (
          the page we load other element that are static or those compoenet whose rendering in completed
          and wait for those component for which data is still not fetched instead show a fallback UI like Skeletons,
          once the data is fetched and component is rendered on server stream in that component in our page(i.e insert it back to page)
          That is the whole point of streaming... :)😆️😆️:)
        ) */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
