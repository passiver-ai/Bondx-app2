'use client';

import { useRouter } from 'next-nprogress-bar';

import BondXLogo from '@/assets/images/bond-x-logo.svg';

import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';

export default function EmailVerification() {
  const router = useRouter();

  const handleResendEmail = () => {
    // Logic for resending the verification email
    console.log('Resend verification email triggered');
  };

  return (
    <div className="container flex h-full flex-col items-center justify-center gap-4 bg-[#f1f5f9]">
      <BondXLogo />
      <Heading level={4} className="text-center">
        E-mail Verification Required
      </Heading>
      <p className="w-full rounded-[6px] bg-[#E2E8F0] p-3 text-center text-[16px] text-[#1E293B]">
        Check your email and click the verification link to continue. If you
        don&apos;t receive an email, check your spam folder.
      </p>
      <div className="flex w-full flex-col gap-2">
        <Button onClick={handleResendEmail}>Resend Verification E-mail</Button>
        <Button variant="secondary" onClick={() => router.push('/')}>
          Go to Login
        </Button>
      </div>
    </div>
  );
}
