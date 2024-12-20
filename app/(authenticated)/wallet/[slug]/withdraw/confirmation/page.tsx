'use client';

import * as React from 'react';

import { useRouter } from 'next-nprogress-bar';
import Image from 'next/image';

import AlertDialog, {
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/AlertDialog';
import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';

import { Button } from '@kit/ui/button';

export default function WithdrawConfirmation() {
  const router = useRouter();
  const rootRef = React.useRef<HTMLElement>(null);
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  React.useLayoutEffect(() => {
    setTitle?.('Withdraw');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);

    rootRef.current = document.getElementById('root-parent');
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const handleDialogOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open) router.push('/wallet/bnb');
    },
    [router],
  );

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
        <AlertDialog onOpenChange={handleDialogOpenChange}>
          <AlertDialogTrigger asChild>
            <Button className="w-full">Confirm</Button>
          </AlertDialogTrigger>
          <AlertDialogContent
            className="max-w-[375px]"
            portalProps={{ container: rootRef.current }}
          >
            <AlertDialogHeader>
              <div className="flex justify-center">
                <Icon name="send" className="text-[40px]" />
              </div>
              <AlertDialogTitle className="text-center">
                Processing...
              </AlertDialogTitle>
              <AlertDialogDescription>
                <span
                  role="alert"
                  className="block rounded-[6px] bg-[#F8FAFC] px-6 py-3 text-center text-[16px] font-semibold text-[#475569]"
                >
                  Transaction in progress! <br />
                  This may take a while.
                </span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                className="w-full"
                buttonProps={{ variant: 'outline' }}
              >
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
