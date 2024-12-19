'use client';

import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';

export default function WalletDetail() {
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('BNX');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return (
    <div className="container py-2">
      <div className="mb-6 mt-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  width={54}
                  height={54}
                  alt="BNX Token"
                  src="/images/bnx.png"
                  className="rounded-full"
                />
              </div>
              <div>
                <Heading level={5}>BNX</Heading>
                <p className="text-[14px] text-[#6B7280]">BONDX</p>
              </div>
            </div>
            <div className="text-right">
              <Heading level={5}>2,000.392839</Heading>
              <div className="text-[14px] text-[#6B7280]">≈ 0 USDT</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="bg-[#f1f5f9]" asChild>
              <Link href="/wallet/bnb/deposit">Deposit</Link>
            </Button>
            <Button variant="outline" className="bg-[#f1f5f9]" asChild>
              <Link href="/wallet/bnb/withdraw">Withdraw</Link>
            </Button>
          </div>
        </div>
      </div>

      <Heading level={5}>History</Heading>

      <div className="mt-2 flex items-center justify-center">
        <div className="w-full">
          <div className="border-b border-gray-200 py-3">
            <div className="flex items-center justify-between">
              <span>Withdraw</span>
              <span className="text-red-500">-200.2345432</span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.04 10:01:23
            </div>
          </div>

          <div className="border-b border-gray-200 py-3">
            <div className="flex items-center justify-between">
              <span>Deposit</span>
              <span className="text-green-500">+2,000.392839</span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.06 12:07:36
            </div>
          </div>

          <div className="border-b border-gray-200 py-3">
            <div className="flex items-center justify-between">
              <span>Deposit</span>
              <span className="text-green-500">+2,000.392839</span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.06 12:07:36
            </div>
          </div>

          <div className="border-b border-gray-200 py-3">
            <div className="flex items-center justify-between">
              <span>Deposit</span>
              <span className="text-green-500">+2,000.392839</span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.06 12:07:36
            </div>
          </div>

          <div className="border-b border-gray-200 py-3">
            <div className="flex items-center justify-between">
              <span className="text-black">Withdraw</span>
              <span className="text-red-500">-200.2345432</span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.04 10:01:23
            </div>
          </div>

          <div className="py-3">
            <div className="flex items-center justify-between">
              <span>Withdraw</span>
              <span className="text-red-500">-200.2345432</span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.04 10:01:23
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
