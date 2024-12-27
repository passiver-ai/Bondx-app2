'use client';

import * as React from 'react';

import Link from 'next/link';

import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import { useTranslation } from 'react-i18next';

import { Badge } from '@kit/ui/badge';
import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';
import { Trans } from '@kit/ui/trans';

export default function Profile() {
  const { i18n } = useTranslation();
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  const { language: currentLanguage } = i18n;

  React.useLayoutEffect(() => {
    setTitle?.('profile:profile');
    setHasBackButton?.(false);
    setShowBottomBar?.(true);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  const languageNames = React.useMemo(() => {
    return new Intl.DisplayNames([currentLanguage], {
      type: 'language',
    });
  }, [currentLanguage]);

  return (
    <div className="container py-2">
      <div className="space-y-4">
        <div className="space-y-1">
          <Heading level={4}>usersemail@gmail.com</Heading>
          <Badge variant="info">
            <span>
              <Trans i18nKey={'profile:userType:investor'} />
            </span>
          </Badge>
        </div>
        <hr />
        <div className="space-y-3">
          <Heading level={4}>Settings</Heading>

          <nav className="space-y-4">
            <Link href="/kyc" className="block">
              <div className="flex items-center">
                <p className="flex-1">
                  <Trans i18nKey={'profile:kycVerification'} />
                </p>
                <span className="text-right text-sm text-[#64748B]">
                  <Trans i18nKey={'profile:unverified'} />
                </span>
                <Icon
                  name="chevron-right"
                  className="ml-1 inline-block text-[18px]"
                />
              </div>
            </Link>
            <Link href="/pointfree" className="block">
              <div className="flex items-center">
                <p className="flex-1">
                  <Trans i18nKey={'profile:pointFree'} />
                </p>
                <span className="text-right text-sm text-[#64748B]">
                  <Trans i18nKey={'profile:unverified'} />
                </span>
                <Icon
                  name="chevron-right"
                  className="ml-1 inline-block text-[18px]"
                />
              </div>
            </Link>
            <Link href="/language" className="block">
              <div className="flex items-center">
                <p className="flex-1">
                  <Trans i18nKey={'profile:language'} />
                </p>
                <span className="text-right text-sm text-[#64748B]">
                  {languageNames.of(currentLanguage)}
                </span>
                <Icon
                  name="chevron-right"
                  className="ml-1 inline-block text-[18px]"
                />
              </div>
            </Link>
          </nav>
        </div>

        <div className="space-y-3">
          <Heading level={4}>Support</Heading>

          <nav className="space-y-4">
            <Link href="/help" className="block">
              <div className="flex items-center">
                <p className="flex-1">
                  <Trans i18nKey={'profile:helpCenter'} />
                </p>
                <Icon
                  name="chevron-right"
                  className="ml-1 inline-block text-[18px]"
                />
              </div>
            </Link>
          </nav>
        </div>

        <Button variant="outline" className="w-full">
          <Trans i18nKey={'auth:signOut'} />
        </Button>
      </div>
    </div>
  );
}
