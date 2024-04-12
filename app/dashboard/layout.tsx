import React from 'react';

import Sidenav from '@/app/ui/dashboard/sidenav';

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Sidenav />

      <div>{children}</div>
    </div>
  );
}
