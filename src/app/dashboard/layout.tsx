import React from 'react';

import Sidenav from '@/components/ui/dashboard/sidenav';

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full flex-none md:w-52">
        <Sidenav />
      </div>

      <div className='p-6 w-full'>{children}</div>
    </div>
  );
}
