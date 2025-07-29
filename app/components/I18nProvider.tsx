'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { useState, useEffect } from 'react';

export default function I18nProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsInitialized(true);
    } else {
      i18n.on('initialized', () => {
        setIsInitialized(true);
      });
    }

    return () => {
      i18n.off('initialized');
    };
  }, []);

  if (!isInitialized) {
    return null; // O un componente de carga si lo prefieres
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}