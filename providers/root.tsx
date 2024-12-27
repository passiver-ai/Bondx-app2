'use client';

import * as React from 'react';

import appConfig from '@/config/app.config';
import { i18nResolver } from '@/lib/i18n/i18n.resolver';
import { getI18nSettings } from '@/lib/i18n/i18n.settings';
import { store } from '@/store';
import { AppProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import { I18nProvider } from '@kit/i18n/provider';
import { MonitoringProvider } from '@kit/monitoring/components';
import { AppEventsProvider } from '@kit/shared/events';

import ReactQueryProvider from './react-query';

const RootProvider: React.FC<
  React.PropsWithChildren<{
    lang: string;
    theme?: string;
  }>
> = ({ lang, theme = appConfig.theme, children }) => {
  const i18nSettings = React.useMemo(() => getI18nSettings(lang), [lang]);

  React.useLayoutEffect(() => {
    void (async () => {
      const implementDocumentHeight = (await import('@/lib/viewport'))
        .implementDocumentHeight;

      implementDocumentHeight();
    })();
  }, []);

  return (
    <MonitoringProvider>
      <AppEventsProvider>
        {/* <AnalyticsProvider> */}
        <Provider store={store}>
          <ReactQueryProvider>
            <I18nProvider settings={i18nSettings} resolver={i18nResolver}>
              {/* <AuthProvider> */}
              <ThemeProvider
                attribute="class"
                enableSystem
                disableTransitionOnChange
                defaultTheme={theme}
                enableColorScheme={false}
              >
                {children}

                <AppProgressBar
                  height="4px"
                  shallowRouting
                  stopDelay={1000}
                  color="#334155"
                  options={{ showSpinner: false }}
                />
              </ThemeProvider>
              {/* </AuthProvider> */}
            </I18nProvider>
          </ReactQueryProvider>
        </Provider>
        {/* </AnalyticsProvider> */}
      </AppEventsProvider>
    </MonitoringProvider>
  );
};

export default RootProvider;
