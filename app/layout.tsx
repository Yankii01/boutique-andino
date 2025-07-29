'use client';

import './globals.css';
import { geistSans, geistMono } from './fonts';
import I18nProvider from './components/I18nProvider';
import Header from './components/Header';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import WelcomeSplash from './components/WelcomeSplash';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const welcomeShown = sessionStorage.getItem('welcomeShown');
    if (welcomeShown) {
      setShowSplash(false);
    } else {
      sessionStorage.setItem('welcomeShown', 'true');
    }
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[rgb(239,235,224)]`}>
        <I18nProvider>
          {showSplash ? (
            <WelcomeSplash onFinish={handleSplashFinish} />
          ) : (
            <>
              <Header />
              <main>{children}</main>
              <FloatingWhatsAppButton />
            </>
          )}
        </I18nProvider>
      </body>
    </html>
  );
}
