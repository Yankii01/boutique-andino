'use client';

import { CartProvider } from './CartContext';
import I18nProvider from './I18nProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <I18nProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </I18nProvider>
  );
}
