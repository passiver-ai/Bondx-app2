'use client';

import * as React from 'react';

import { store } from '@/store';
import { AppProgressBar } from 'next-nprogress-bar';
import { Provider } from 'react-redux';

const BaseProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  React.useLayoutEffect(() => {
    void (async () => {
      const implementDocumentHeight = (await import('@/lib/viewport'))
        .implementDocumentHeight;

      implementDocumentHeight();
    })();
  }, []);

  return (
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
  );
};

export default BaseProvider;
