'use client';

import * as React from 'react';

import Link from 'next/link';

import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Badge } from '@kit/ui/badge';
import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';

export default function Profile() {
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('Profile');
    setHasBackButton?.(false);
    setShowBottomBar?.(true);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return (
    <div className="container py-2">
      <div className="space-y-4">
        <div className="space-y-1">
          <Heading level={4}>usersemail@gmail.com</Heading>
          <Badge variant="info">
            <span>Investor</span>
          </Badge>
        </div>
        <hr />
        <div className="space-y-3">
          <Heading level={4}>Settings</Heading>

          <nav className="space-y-4">
            <Link href="/" className="block">
              <div className="flex items-center">
                <p className="flex-1">KYC Verification</p>
                <span className="text-right text-sm text-[#64748B]">
                  Unverified
                </span>
                <Icon className="ml-1 inline-block" name="chevron-right" />
              </div>
            </Link>
            <Link href="/" className="block">
              <div className="flex items-center">
                <p className="flex-1">PointFree</p>
                <span className="text-right text-sm text-[#64748B]">
                  Unverified
                </span>
                <Icon className="ml-1 inline-block" name="chevron-right" />
              </div>
            </Link>
            <Link href="/language" className="block">
              <div className="flex items-center">
                <p className="flex-1">Language</p>
                <span className="text-right text-sm text-[#64748B]">ENG</span>
                <Icon className="ml-1 inline-block" name="chevron-right" />
              </div>
            </Link>
          </nav>
        </div>

        <div className="space-y-3">
          <Heading level={4}>Support</Heading>

          <nav className="space-y-4">
            <Link href="/" className="block">
              <div className="flex items-center">
                <p className="flex-1">Help Center</p>
                <Icon className="ml-1 inline-block" name="chevron-right" />
              </div>
            </Link>
          </nav>
        </div>

        <Button variant="outline" className="w-full">
          Log Out
        </Button>
      </div>
    </div>
  );
}
