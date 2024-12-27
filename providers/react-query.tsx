'use client';

import * as React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ReactQueryProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
