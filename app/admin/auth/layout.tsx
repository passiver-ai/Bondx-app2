import { Page } from '@kit/ui/page';


export const metadata = {
  title: `Admin`,
};

export const dynamic = 'force-dynamic';

export default function AdminAuthLayout({ children }: React.PropsWithChildren) {
  return (
    <Page style="custom">
      {children}
    </Page>
  );
}
