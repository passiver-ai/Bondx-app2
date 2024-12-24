'use client';

import BondXLogo from '@/assets/images/bond-x-logo.svg';
import { useRouter } from 'next-nprogress-bar';

import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';
import { Trans } from '@kit/ui/trans';

export default function EmailVerification() {
  const router = useRouter();

  const handleResendEmail = () => {
    console.log('Resend verification email triggered');
  };

  return (
    <div className="container flex h-full flex-col items-center justify-center gap-4 bg-[#f1f5f9]">
      <BondXLogo />
      <Heading level={4} className="text-center">
        <Trans i18nKey="auth:emailVerificationHeading" />
      </Heading>
      <p className="w-full rounded-[6px] bg-[#E2E8F0] p-3 text-center text-[16px] text-[#1E293B]">
        <Trans i18nKey="auth:emailVerificationMessage" />
      </p>
      <div className="flex w-full flex-col gap-2">
        <Button onClick={handleResendEmail}>
          <Trans i18nKey="auth:resendEmailVerification" />
        </Button>
        <Button variant="secondary" onClick={() => router.push('/')}>
          <Trans i18nKey="auth:goToSignIn" />
        </Button>
      </div>
    </div>
  );
}
