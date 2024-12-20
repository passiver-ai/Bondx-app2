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
    <div className="container py-4">
      <nav className="space-y-4">
        <div className="flex items-center">
          <p className="flex-1">English</p>
          <Icon className="ml-1 inline-block text-[18px]" name="check" />
        </div>
        <div className="flex items-center">
          <p className="flex-1">한국어</p>
          {/* <Icon className="ml-1 inline-block text-[18px]" name="check" /> */}
        </div>
      </nav>
    </div>
  );
}
