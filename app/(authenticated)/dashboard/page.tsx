'use client';

import * as React from 'react';

import { useRouter } from 'next/navigation';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

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
      <div className="mb-6 flex flex-col items-start space-y-1 text-gray-900">
        <div className="text-sm font-medium uppercase">Total Bondx</div>
        <div className="text-4xl font-bold">2,000.392839</div>
        <div className="text-sm text-gray-500">≈ 0 USDT</div>
      </div>

      <div className="rounded-[6px] bg-[#F8FAFC] p-3">
        <div className="mb-4">
          <p className="pretendard-500 mb-[2px] text-[14px] text-[#334155]">
            Withdrawable
          </p>
          <p className="inter-600 text-[18px] text-[#334155]">0 BONDX</p>
        </div>
        <div className="mb-4">
          <p className="pretendard-500 mb-[2px] text-[14px] text-[#334155]">
            Locked
          </p>
          <p className="inter-600 text-[18px] text-[#334155]">
            2,000.392839 BONDX
          </p>
        </div>
        <div>
          <p className="pretendard-500 mb-[2px] text-[14px] text-[#334155]">
            Withdrawn
          </p>
          <p className="inter-600 text-[18px] text-[#334155]">
            300.192839 BONDX
          </p>
        </div>
      </div>

      <div className="my-6 border-[1px] border-[#E2E8F0]"></div>

      <div>
        <div className="inter-600 mb-4 text-[18px] text-[#334155]">History</div>
        <div className="rounded-[6px] bg-[#F8FAFC] p-3">
          <div className="mb-4">
            <p className="pretendard-500 mb-[2px] text-[14px] text-[#334155]">
              Lock Remaining
            </p>
            <p className="inter-600 text-[18px] text-[#334155]">
              1,203.398219 BONDX
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="w-full">
          <div className="border-b border-gray-200 py-4">
            <div className="flex items-center justify-between">
              <span className="pretendard-400 text-[16px] text-black">
                Withdraw
              </span>
              <span className="pretendard-500 text-[16px] text-red-500">
                -200.2345432
              </span>
            </div>
            <div className="pretendard-400 text-[14px] text-[#64748B]">
              2024.12.04 10:01:23
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

      <div className="text-center">
        <button
          onClick={() => router?.push('/wallet/bondx')}
          className="pretendard-500 h-[48px] w-full rounded-[6px] border-[1px] border-[#E2E8F0] px-4 py-2 text-[#0F172A] hover:bg-gray-200"
        >
          More
        </button>
      </div>
    </div>
  );
}
