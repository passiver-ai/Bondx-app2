'use client';

import * as React from 'react';

import Image from 'next/image';

import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Button } from '@kit/ui/button';
import { Trans } from '@kit/ui/trans';

export default function Deposit() {
  const [isCopied, setCopied] = React.useState(false);
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('wallet:deposit');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const handleCopy = React.useCallback(async () => {
    const text = '0xC38a918EAf6861E356316C6449E85E29C18EF39E';

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed'; // Avoid scrolling to bottom
      textarea.style.opacity = '0'; // Hide element
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopied(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setCopied(false);
  }, []);

  return (
    <div className="container py-2">
      <div className="space-y-4">
        <div role="alert" className="mt-2 rounded-[6px] bg-[#FFF7ED] p-3">
          <p className="text-[16px] font-semibold text-[#EA580C]">
            <Trans
              i18nKey="wallet:depositWarning"
              values={{ chain: 'BNB Smart Chain' }}
            />
          </p>
        </div>
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <Trans i18nKey="wallet:network" />
            </p>
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
            <p className="text-sm">
              <Trans i18nKey="wallet:token" />
            </p>
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
        </div>
        <div role="alert" className="rounded-[6px] bg-[#F8FAFC] px-6 py-3">
          <p className="break-all text-center text-[16px] font-semibold text-[#475569]">
            0xC38a918EAf6861E356316C6449E85E29C18EF39E
          </p>
        </div>
        <Button onClick={handleCopy} className="w-full">
          {isCopied ? (
            <Trans i18nKey="common:copied" />
          ) : (
            <Trans i18nKey="common:copyAddress" />
          )}
        </Button>
      </div>
    </div>
  );
}
