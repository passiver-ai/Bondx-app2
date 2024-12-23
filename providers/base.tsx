'use client';

import * as React from 'react';

import { store } from '@/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProgressBar } from 'next-nprogress-bar';
import { Provider } from 'react-redux';

const BaseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  React.useLayoutEffect(() => {
    void (async () => {
      const implementDocumentHeight = (await import('@/lib/viewport'))
        .implementDocumentHeight;

      implementDocumentHeight();
    })();
  }, []);

  return (
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
  );
};

export default BaseProvider;
