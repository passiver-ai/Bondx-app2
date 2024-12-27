import { Page, PageNavigation } from '@kit/ui/page';

import { AdminSidebar } from '~/admin/_components/admin-sidebar';

export const metadata = {
  title: `Admin`,
};

export const dynamic = 'force-dynamic';

export default function AdminLayout(props: React.PropsWithChildren) {
  return (
    <Page style={'sidebar'}>
      <PageNavigation>
        <AdminSidebar />
      </PageNavigation>
      
      {props.children}
    </Page>
  );
}
