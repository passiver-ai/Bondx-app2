'use client';

import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Heading } from '@kit/ui/heading';

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
        <div className="space-y-3">
          <Link className="flex items-center" href="/wallet/bnx">
            <div className="flex flex-1 items-center gap-3">
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
                <Heading level={6}>BNX</Heading>
                <p className="text-[14px] text-[#6B7280]">BONDX</p>
              </div>
            </div>
            <div className="text-right">
              <Heading level={6}>2,000.392839</Heading>
              <div className="text-[14px] text-[#6B7280]">≈ 0 USDT</div>
            </div>
            <Icon name="chevron-right" className="ml-2" />
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
                <Image
                  width={54}
                  height={54}
                  alt="BNB Token"
                  src="/images/bnb.png"
                  className="rounded-full"
                />
              </div>
              <div>
                <Heading level={6}>BNB</Heading>
                <p className="text-[14px] text-[#6B7280]">BNB</p>
              </div>
            </div>
            <div className="text-right">
              <Heading level={6}>3.291029</Heading>
              <div className="text-[14px] text-[#6B7280]">≈ 0 USDT</div>
            </div>
            <Icon name="chevron-right" className="ml-2" />
          </Link>
        </div>

        <div className="space-y-2">
          <Link className="flex items-center" href="/wallet/bnx">
            <div className="flex flex-1 items-center gap-3">
              <div className="relative">
                <Image
                  width={54}
                  height={54}
                  alt="USDT Token"
                  src="/images/usdt.png"
                  className="rounded-full"
                />
              </div>
              <div>
                <Heading level={6}>USDT</Heading>
                <p className="text-[14px] text-[#6B7280]">Tether USD</p>
              </div>
            </div>
            <div className="text-right">
              <Heading level={6}>100.3920491</Heading>
              <div className="text-[14px] text-[#6B7280]">≈ 0 USDT</div>
            </div>
            <Icon name="chevron-right" className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
