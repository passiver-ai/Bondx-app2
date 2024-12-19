'use client';

import * as React from 'react';

import Image from 'next/image';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Button } from '@kit/ui/button';

export default function WithdrawConfirmation() {
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('Withdraw');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const handleConfirm = React.useCallback(() => {
    //
  }, []);

  return (
    <div className="container py-2">
      <div className="space-y-4">
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm">Network</p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <Image
                width={26}
                height={26}
                alt="BNB Smart Chain"
                className="rounded-full"
                src="/images/bnb-chain.png"
              />
              <p className="font-heading font-bold">BNB Smart Chain</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">Token</p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <Image
                width={26}
                height={26}
                alt="BNB Token"
                src="/images/bnb.png"
                className="rounded-full"
              />
              <p className="font-heading font-bold">BNB</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">Amount</p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <p className="font-heading font-bold">3 BNB</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">Network Fee</p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <p className="font-heading font-bold">0.000021 BNB</p>
            </div>
          </div>
          <hr />
          <div className="flex items-baseline justify-between">
            <p className="font-bold">Total</p>
            <div className="gap-[0.5ch] text-right">
              <p className="font-heading font-bold">2.999979 BNB</p>
              <span className="text-sm text-[#6B7280]">≈ 2,143.76 USDT</span>
            </div>
          </div>
        </div>

        {/* <div role="alert" className="mt-2 rounded-[6px] bg-[#FEF2F2] p-3">
          <p className="text-[16px] font-semibold text-[#EF4444]">
            Insufficient fees. Please deposit BNB.
          </p>
        </div> */}

        <Button onClick={handleConfirm} className="w-full">
          Confirm
        </Button>
      </div>
    </div>
  );
}
