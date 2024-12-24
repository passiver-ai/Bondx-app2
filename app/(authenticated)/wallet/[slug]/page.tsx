'use client';

import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';
import { Trans } from '@kit/ui/trans';

export default function WalletDetail() {
  const [sending, setSending] = React.useState(true);
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('BNX');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);

    setTimeout(() => {
      setSending(false);
    }, 10000);
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
              <Link href="/wallet/bnb/deposit">
                <Trans i18nKey="wallet:deposit" />
              </Link>
            </Button>
            <Button variant="outline" className="bg-[#f1f5f9]" asChild>
              <Link href="/wallet/bnb/withdraw">
                <Trans i18nKey="wallet:withdraw" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Heading level={5}>
        <Trans i18nKey="common:history" />
      </Heading>

      <div className="mt-2 flex items-center justify-center">
        <div className="w-full">
          <Link href="/wallet/bnb/transaction/withdraw">
            <div className="border-b border-gray-200 py-3">
              <div className="flex items-center justify-between">
                <span>
                  <Trans i18nKey="wallet:withdraw" />{' '}
                  {sending && (
                    <small className="font-semibold text-[#F97316]">
                      Pending...
                    </small>
                  )}
                </span>
                <span className="text-red-500">-3.0001</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                2024.12.04 10:01:23
              </div>
            </div>
          </Link>

          <Link href="/wallet/bnb/transaction/withdraw">
            <div className="border-b border-gray-200 py-3">
              <div className="flex items-center justify-between">
                <span>
                  <Trans i18nKey="wallet:withdraw" />
                </span>
                <span className="text-red-500">-200.2345432</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                2024.12.04 10:01:23
              </div>
            </div>
          </Link>

          <Link href="/wallet/bnb/transaction/withdraw">
            <div className="border-b border-gray-200 py-3">
              <div className="flex items-center justify-between">
                <span>
                  <Trans i18nKey="wallet:deposit" />
                </span>
                <span className="text-green-500">+2,000.392839</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                2024.12.06 12:07:36
              </div>
            </div>
          </Link>

          <Link href="/wallet/bnb/transaction/withdraw">
            <div className="border-b border-gray-200 py-3">
              <div className="flex items-center justify-between">
                <span>
                  <Trans i18nKey="wallet:deposit" />
                </span>
                <span className="text-green-500">+2,000.392839</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                2024.12.06 12:07:36
              </div>
            </div>
          </Link>

          <Link href="/wallet/bnb/transaction/withdraw">
            <div className="border-b border-gray-200 py-3">
              <div className="flex items-center justify-between">
                <span>
                  <Trans i18nKey="wallet:deposit" />
                </span>
                <span className="text-green-500">+2,000.392839</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                2024.12.06 12:07:36
              </div>
            </div>
          </Link>

          <Link href="/wallet/bnb/transaction/withdraw">
            <div className="border-b border-gray-200 py-3">
              <div className="flex items-center justify-between">
                <span className="text-black">
                  <Trans i18nKey="wallet:withdraw" />
                </span>
                <span className="text-red-500">-200.2345432</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                2024.12.04 10:01:23
              </div>
            </div>
          </Link>

          <Link href="/wallet/bnb/transaction/withdraw">
            <div className="border-b border-gray-200 py-3">
              <div className="flex items-center justify-between">
                <span>
                  <Trans i18nKey="wallet:withdraw" />
                </span>
                <span className="text-red-500">-200.2345432</span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                2024.12.04 10:01:23
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
