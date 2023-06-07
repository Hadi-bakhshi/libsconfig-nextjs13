import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/lib/persistStore';
// import persistStore from 'redux-persist/lib/persistStore';
import storage from './sync_storage';
// import { createWrapper } from 'next-redux-wrapper';

const persistConfig = {
  key: 'asi',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistedStore = persistStore(store);

// const makeStore = () => store;
// export const wrapper: any = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
