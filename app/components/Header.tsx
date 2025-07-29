'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Estado para el menú de idioma
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.refresh();
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // Ocultar al bajar, después de un pequeño scroll
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 border border-white/20 rounded-b-lg transition-transform duration-300 bg-[rgb(239,235,224)]/60 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto flex justify-between items-center px-6 py-1 max-w-screen-xl">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo Boutique Andino"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-3xl font-semibold tracking-wide text-[rgb(127,85,57)]">
            Boutique Andino
          </span>
        </div>

        {/* Botón de hamburguesa para móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[rgb(127,85,57)] focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navegación principal */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-[rgb(239,235,224)] md:bg-transparent shadow-md md:shadow-none rounded-b-lg md:rounded-none py-4 md:py-0`}>
          <ul className="flex flex-col md:flex-row gap-5 text-[rgb(127,85,57)] font-light text-lg px-6 md:px-0">
            <li><Link href="/" className="hover:text-[rgb(192,87,70)] transition" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link></li>
            <li><Link href="/collection" className="hover:text-[rgb(192,87,70)] transition" onClick={() => setIsMenuOpen(false)}>{t('collection')}</Link></li>
            <li><Link href="/contact" className="hover:text-[rgb(192,87,70)] transition" onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link></li>
            {isLanguageMenuOpen ? (
              <>
                <li><button onClick={() => { changeLanguage('en'); setIsLanguageMenuOpen(false); }} className="hover:text-[rgb(192,87,70)] transition">{t('english')}</button></li>
                <li><button onClick={() => { changeLanguage('es'); setIsLanguageMenuOpen(false); }} className="hover:text-[rgb(192,87,70)] transition">{t('spanish')}</button></li>
              </>
            ) : (
              <li>
                <button
                  className="hover:text-[rgb(192,87,70)] transition focus:outline-none"
                  onClick={() => setIsLanguageMenuOpen(true)}
                >
                  {t('language')}
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
