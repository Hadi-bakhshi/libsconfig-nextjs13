'use client';

import { Provider } from 'react-redux';
import { persistedStore, store } from '@/feature/store';
import { PersistGate } from 'redux-persist/es/integration/react';
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={children}>
        {children}
      </PersistGate>
    </Provider>
  );
}
