'use client';

import * as React from 'react';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Button } from '@kit/ui/button';
import { Trans } from '@kit/ui/trans';

export default function TransactionDetail() {
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('wallet:withdraw');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return (
    <div className="container py-2">
      <div className="space-y-4">
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <Trans i18nKey="wallet:date" />
            </p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <p className="font-heading font-bold">2024.12.04 10:01:23</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <Trans i18nKey="wallet:status" />
            </p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <p className="font-heading font-bold">
                <Trans i18nKey="common:completed" />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <Trans i18nKey="wallet:address" />
            </p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <p className="font-heading font-bold">0xD8E8f8...Cda3fb</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <Trans i18nKey="wallet:amount" />
            </p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <p className="font-heading font-bold">3 BNB</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <Trans i18nKey="wallet:networkFee" />
            </p>
            <div className="flex items-center gap-[0.5ch] text-right">
              <p className="font-heading font-bold">0.000021 BNB</p>
            </div>
          </div>
          <hr />
          <div className="flex items-baseline justify-between">
            <p className="font-bold">
              <Trans i18nKey="wallet:total" />
            </p>
            <div className="gap-[0.5ch] text-right">
              <p className="font-heading font-bold">2.999979 BNB</p>
              <span className="text-sm text-[#6B7280]">≈ 2,143.76 USDT</span>
            </div>
          </div>
        </div>

        <Button className="w-full" variant="outline">
          <Trans i18nKey="wallet:viewBlockchainExplorer" />
        </Button>
      </div>
    </div>
  );
}
