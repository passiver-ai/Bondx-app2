'use client';

import * as React from 'react';

import Link from 'next/link';

import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

export default function Wallet() {
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('Wallet');
    setHasBackButton?.(false);
    setShowBottomBar?.(true);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return (
    <div className="container py-2">
      <div className="space-y-6">
        <div className="space-y-2">
          <Link className="flex items-center" href="/wallet/bnx">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative">
                <img
                  src="https://img.freepik.com/premium-vector/bnx-logo-bnx-letter-bnx-letter-logo-design-initials-bnx-logo-linked-with-circle-uppercase-monogram-logo-bnx-typography-technology-business-real-estate-brand_229120-64149.jpg?w=740"
                  alt="BNX Token"
                  className="h-[48px] w-[48px] rounded-full bg-gray-100"
                />
              </div>
              <div>
                <h2 className="inter-600 text-[18px] text-black">BNX</h2>
                <p className="pretendard-500 text-[14px] text-[#6B7280]">
                  BONDX
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="inter-600 text-[18px] text-black">
                2,000.392839
              </div>
              <div className="pretendard-500 text-[14px] text-[#6B7280]">
                ≈ 0 USDT
              </div>
            </div>
            <Icon name="chevron-right" />
          </Link>

          <div className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-sm">
            <span>Locked BONDX:</span>
            <span>100</span>
          </div>
        </div>

        <div className="space-y-2">
          <Link className="flex items-center" href="/wallet/bnx">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative">
                <img
                  src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=024"
                  alt="BNB Token"
                  className="h-[48px] w-[48px] rounded-full bg-gray-100"
                />
              </div>
              <div>
                <h2 className="inter-600 text-[18px] text-black">BNB</h2>
                <p className="pretendard-500 text-[14px] text-[#6B7280]">BNB</p>
              </div>
            </div>
            <div className="text-right">
              <div className="inter-600 text-[18px] text-black">3.291029</div>
              <div className="pretendard-500 text-[14px] text-[#6B7280]">
                ≈ 0 USDT
              </div>
            </div>
            <Icon name="chevron-right" />
          </Link>
        </div>

        <div className="space-y-2">
          <Link className="flex items-center" href="/wallet/bnx">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative">
                <img
                  src="https://cryptologos.cc/logos/tether-usdt-logo.png?v=024"
                  alt="USDT Token"
                  className="h-[48px] w-[48px] rounded-full bg-gray-100"
                />
              </div>
              <div>
                <h2 className="inter-600 text-[18px] text-black">USDT</h2>
                <p className="pretendard-500 text-[14px] text-[#6B7280]">
                  Tether USD
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="inter-600 text-[18px] text-black">
                100.3920491
              </div>
              <div className="pretendard-500 text-[14px] text-[#6B7280]">
                ≈ 0 USDT
              </div>
            </div>
            <Icon name="chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
