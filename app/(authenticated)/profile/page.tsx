'use client';

import * as React from 'react';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

export default function Profile() {
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('Profile');
    setHasBackButton?.(false);
    setShowBottomBar?.(true);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return <div className="container">Profile</div>;
}
