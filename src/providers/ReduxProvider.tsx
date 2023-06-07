'use client';

import { useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/feature/store';
import persistStore from 'redux-persist/lib/persistStore';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    persistStore(store);
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
