'use client';

import './globals.css';
import { geistSans, geistMono } from './fonts';
import AppProviders from './components/AppProviders';
import Header from './components/Header';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import WelcomeSplash from './components/WelcomeSplash';
import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import FloatingCartButton from './components/FloatingCartButton';
import WhatsAppButtonWrapper from './components/WhatsAppButtonWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Nuevo estado para el menú de hamburguesa

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
        <AppProviders>
          {showSplash ? (
            <WelcomeSplash onFinish={handleSplashFinish} />
          ) : (
            <div>
              <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              <Cart />
              <main>{children}</main>
              <WhatsAppButtonWrapper isMenuOpen={isMenuOpen} />
            </div>
          )}
        </AppProviders>
      </body>
    </html>
  );
}
