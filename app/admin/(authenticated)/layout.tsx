import { AdminSidebar } from '@/components/AdminSidebar';

import { Page, PageNavigation } from '@kit/ui/page';

export const metadata = {
  title: `Admin`,
};

export const dynamic = 'force-dynamic';

export default function AdminAuthenticatedLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <Page style="sidebar">
      <PageNavigation>
        <AdminSidebar />
      </PageNavigation>

      {children}
    </Page>
  );
}
