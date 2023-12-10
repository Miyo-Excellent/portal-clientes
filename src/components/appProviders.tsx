"use client";
import { Provider } from "react-redux";
import { persistor, store } from "@redux/store";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

export interface AppProvidersProps {
  children?: ReactNode;
  loading?: ReactNode;
}

export const AppProviders = ({ children, loading }: AppProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={loading} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
