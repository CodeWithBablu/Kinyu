import Form from '@/components/ui/invoices/edit-form';
import Breadcrumbs from '@/components/ui/invoices/breadcrumbs';
import { notFound } from 'next/navigation';
import { fetchCustomers, fetchInvoiceById } from '@/lib/data';

export default async function UpdateInvoicePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  console.log('invoice : ', invoice);
  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
