/* eslint-disable @next/next/no-sync-scripts */
'use client';

import * as React from 'react';

import AuthenticatedLayout, {
  AuthenticatedLayoutProvider,
} from '@/layouts/AuthenticatedLayout';

/* eslint-disable @next/next/no-sync-scripts */

/* eslint-disable @next/next/no-sync-scripts */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutProps = {
    showBottomBar: true,
    hasBackButton: false,
  };

  return (
    <AuthenticatedLayoutProvider value={layoutProps}>
      <AuthenticatedLayout>
        <section>{children}</section>
      </AuthenticatedLayout>
    </AuthenticatedLayoutProvider>
  );
}
