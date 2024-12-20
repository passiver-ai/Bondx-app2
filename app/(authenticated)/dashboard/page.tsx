'use client';

import * as React from 'react';

import { useRouter } from 'next-nprogress-bar';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';

export default function Dashboard() {
  const router = useRouter();
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('Dashboard');
    setHasBackButton?.(false);
    setShowBottomBar?.(true);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return (
    <div className="container py-2">
      <div className="mb-5 flex flex-col items-start space-y-1 text-gray-900">
        <div className="font-medium uppercase">Total Bondx</div>
        <Heading level={1}>2,000.392839</Heading>
        <div className="mt-1 text-sm text-gray-500">≈ 0 USDT</div>
      </div>

      <div className="rounded-[6px] bg-[#F8FAFC] p-3">
        <div className="mb-4">
          <p className="mb-[2px] text-[14px]">Withdrawable</p>
          <Heading level={6}>0 BONDX</Heading>
        </div>
        <div className="mb-4">
          <p className="mb-[2px] text-[14px]">Locked</p>
          <Heading level={6}>2,000.392839 BONDX</Heading>
        </div>
        <div>
          <p className="mb-[2px] text-[14px]">Withdrawn</p>
          <Heading level={6}>300.192839 BONDX</Heading>
        </div>
      </div>

      <div className="my-5 border-[1px] border-[#E2E8F0]" />

      <Heading level={5}>History</Heading>

      <div className="mt-2 rounded-[6px] bg-[#F8FAFC] p-3">
        <p className="mb-[2px] text-[14px]">Lock Remaining</p>
        <Heading level={6}>1,203.398219 BONDX</Heading>
      </div>

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
        </div>
      </div>

      <Button
        onClick={() => router?.push('/wallet/bnx')}
        variant="outline"
        className="mt-4 w-full"
      >
        More
      </Button>
    </div>
  );
}
