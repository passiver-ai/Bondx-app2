'use client';

import * as React from 'react';

import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

export default function Language() {
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('Language');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return (
    <div className="container py-2">
      <nav className="space-y-4">
        <div className="flex items-center">
          <p className="flex-1">Help Center</p>
          <Icon className="ml-1 inline-block" name="chevron-right" />
        </div>
      </nav>
    </div>
  );
}
