import { fetchCardData } from '@/lib/data';
import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  customers: UserGroupIcon,
}

export default async function CardWrapper() {

  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();


  return (
    <>
      <Card title='Collected' value={totalPaidInvoices} type='collected' />
      <Card title='Pending' value={totalPendingInvoices} type='pending' />
      <Card title='Total Invoices' value={numberOfInvoices} type='invoices' />
      <Card title='Total Customers' value={numberOfCustomers} type='customers' />
    </>
  );
}

export function Card({ title, value, type }:
  {
    title: string,
    value: string | number,
    type: 'collected' | 'pending' | 'invoices' | 'customers'
  }) {

  const Icon = iconMap[type];

  return (
    <div className=' rounded-xl bg-zinc-800/50 p-2 shadow-2xl'>
      <div className=' flex p-4'>
        {Icon ? <Icon className=' h-5 w-5 text-gray-400' /> : null}
        <h3 className=' ml-2 text-sm font-medium'>{title}</h3>
      </div>
      <p className='truncate rounded-xl font-poppins font-medium bg-pink-600/90 px-4 py-8 text-center text-2xl'>{value}</p>
    </div>
  );
}