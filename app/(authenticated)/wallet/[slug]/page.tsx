'use client';

import * as React from 'react';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Button } from '@kit/ui/button';

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
      <div className="mx-auto mb-6 max-w-xl">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <img
                  src="https://img.freepik.com/premium-vector/bnx-logo-bnx-letter-bnx-letter-logo-design-initials-bnx-logo-linked-with-circle-uppercase-monogram-logo-bnx-typography-technology-business-real-estate-brand_229120-64149.jpg?w=740"
                  alt="BNX Token"
                  className="h-[48px] w-[48px] rounded-full bg-gray-100"
                />
              </div>
              <div>
                <h2 className="inter-600 text-[18px] text-black">BNX</h2>
                <p className="text-[14px] text-[#6B7280]">BONDX</p>
              </div>
            </div>
            <div className="text-right">
              <div className="inter-600 text-[18px] text-black">
                2,000.392839
              </div>
              <div className="text-[14px] text-[#6B7280]">≈ 0 USDT</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="bg-[#f1f5f9]">
              Deposit
            </Button>
            <Button variant="outline" className="bg-[#f1f5f9]">
              Withdraw
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4 font-heading text-[18px] text-[#334155]">
          History
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="w-full">
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="text-black">Withdraw</span>
              <span className="text-red-500">-200.2345432</span>
            </div>
            <div className="text-[#64748B]">2024.12.04 10:01:23</div>
          </div>

          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-black">Deposit</span>
              <span className="font-semibold text-green-500">
                +2,000.392839
              </span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.06 12:07:36
            </div>
          </div>
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-black">Deposit</span>
              <span className="font-semibold text-green-500">
                +2,000.392839
              </span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.06 12:07:36
            </div>
          </div>

          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-black">Deposit</span>
              <span className="font-semibold text-green-500">
                +2,000.392839
              </span>
            </div>
            <div className="mt-1 text-sm text-gray-500">
              2024.12.06 12:07:36
            </div>
          </div>
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="text-black">Withdraw</span>
              <span className="text-red-500">-200.2345432</span>
            </div>
            <div className="text-[#64748B]">2024.12.04 10:01:23</div>
          </div>

          <div className="py-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-black">Withdraw</span>
              <span className="font-semibold text-red-500">-200.2345432</span>
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
