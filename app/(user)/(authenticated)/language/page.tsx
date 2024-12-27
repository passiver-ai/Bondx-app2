'use client';

import * as React from 'react';

import Icon from '@/components/Icon';
import { useAuthenticatedLayoutContext } from '@/layouts/AuthenticatedLayout';
import { useRouter } from 'next-nprogress-bar';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const { setTitle, setHasBackButton, setShowBottomBar } =
    useAuthenticatedLayoutContext();

  const { language: currentLanguage, options } = i18n;

  const locales = (options.supportedLngs as string[]).filter(
    (locale) => locale.toLowerCase() !== 'cimode',
  );

  const languageNames = React.useMemo(() => {
    return new Intl.DisplayNames([currentLanguage], {
      type: 'language',
    });
  }, [currentLanguage]);

  const languageChanged = React.useCallback(
    async (locale: string) => {
      await i18n.changeLanguage(locale);
      router.refresh();
    },
    [i18n, router],
  );

  React.useLayoutEffect(() => {
    setTitle?.('profile:language');
    setHasBackButton?.(true);
    setShowBottomBar?.(false);
  }, [setTitle, setHasBackButton, setShowBottomBar]);

  return (
    <div className="container py-4">
      <nav className="space-y-4">
        {locales.map((locale) => (
          <div
            key={locale}
            onClick={() => languageChanged(locale)}
            className="flex cursor-pointer items-center"
          >
            <p className="flex-1 capitalize">{languageNames.of(locale.toUpperCase())}</p>
            {currentLanguage === locale && (
              <Icon className="ml-1 inline-block text-[18px]" name="check" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
