'use client';

import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const Providers = ({ children }: React.PropsWithChildren) => {
  const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }));
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
