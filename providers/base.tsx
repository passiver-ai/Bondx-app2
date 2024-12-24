'use client';

import * as React from 'react';

import { i18nResolver } from '@/lib/i18n/i18n.resolver';
import { getI18nSettings } from '@/lib/i18n/i18n.settings';
import { store } from '@/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProgressBar } from 'next-nprogress-bar';
import { Provider } from 'react-redux';

import { I18nProvider } from '@kit/i18n/provider';

const BaseProvider: React.FC<React.PropsWithChildren<{ lang: string }>> = ({
  children,
  lang,
}) => {
  const [queryClient] = React.useState(() => new QueryClient());

  const i18nSettings = React.useMemo(() => getI18nSettings(lang), [lang]);

  React.useLayoutEffect(() => {
    void (async () => {
      const implementDocumentHeight = (await import('@/lib/viewport'))
        .implementDocumentHeight;

      implementDocumentHeight();
    })();
  }, []);

  return (
    <I18nProvider settings={i18nSettings} resolver={i18nResolver}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {children}
          <AppProgressBar
            height="4px"
            shallowRouting
            stopDelay={1000}
            color="#334155"
            options={{ showSpinner: false }}
          />
        </Provider>
      </QueryClientProvider>
    </I18nProvider>
  );
};

export default BaseProvider;
