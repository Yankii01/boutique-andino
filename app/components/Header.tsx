'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import { FaSignInAlt, FaUserPlus, FaUserAlt } from 'react-icons/fa';



import FloatingCartButton from './FloatingCartButton';

export default function Header({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (isOpen: boolean) => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Estado para el menú de idioma
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simular estado de login

  // Textos para el efecto dinámico del botón
  const dynamicButtonTexts = ["login_register_me", "login_start_session", "login_access", "login_register_now"];
  const [currentDynamicTextIndex, setCurrentDynamicTextIndex] = useState(0);

  // Efecto para simular el cambio de estado de login (puedes reemplazarlo con tu lógica real)
  useEffect(() => {
    // Aquí iría tu lógica para verificar si el usuario está logueado
    // Por ahora, lo dejaremos en false para simular el estado de "no logueado"
    // setIsLoggedIn(true); // Descomenta esta línea para simular un usuario logueado
  }, []);

  // Efecto para el cambio de texto dinámico
  useEffect(() => {
    if (!isLoggedIn) { // Solo cambia el texto dinámicamente si el usuario no está logueado
      const interval = setInterval(() => {
        setCurrentDynamicTextIndex((prevIndex) =>
          (prevIndex + 1) % dynamicButtonTexts.length
        );
      }, 3000); // Cambia cada 3 segundos

      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
  }, [isLoggedIn, dynamicButtonTexts.length]);

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
    <header className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 border border-white/20 rounded-b-lg transition-transform duration-300 bg-[rgb(239,235,224)]/60 ${isMenuOpen ? 'translate-y-0' : (isVisible ? 'translate-y-0' : '-translate-y-full')}`}>
      <div className="mx-auto flex justify-between items-center px-6 py-1 max-w-screen-xl">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Boutique Andino"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href="/">
            <span className="text-3xl font-semibold tracking-wide text-[rgb(127,85,57)]">
              Boutique Andino
            </span>
          </Link>
        </div>

        {/* Botón de hamburguesa */}
        <div className="flex items-center gap-4">
          <Link href={isLoggedIn ? "/profile" : "/login"} className="bg-peru-madera text-peru-crema px-4 rounded-full shadow-lg hover:bg-peru-madera/80 transition-colors duration-300 flex items-center justify-center text-sm font-semibold gap-2 w-[150px] h-[50px] whitespace-nowrap text-center animate-pulse-hover">
            {isLoggedIn ? <FaUserAlt className="text-lg" /> : <FaSignInAlt className="text-lg" />}
            <span key={currentDynamicTextIndex} className="blink-text text-[rgb(31,41,55)]">
              {isLoggedIn ? t('profile') : t(dynamicButtonTexts[currentDynamicTextIndex])}
            </span>
          </Link>
          <FloatingCartButton />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-peru-madera text-peru-crema p-2 rounded-full shadow-lg hover:bg-peru-madera/80 transition-colors duration-300 flex items-center justify-center focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Navegación principal (menú deslizante) */}
      <nav className={`fixed top-0 right-0 h-screen w-64 bg-[rgb(239,235,224)] shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0 animate-slide-in-right' : 'translate-x-full animate-slide-out-right'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="bg-peru-madera text-peru-crema p-2 rounded-full shadow-lg hover:bg-peru-madera/80 transition-colors duration-300 flex items-center justify-center focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-5 text-[rgb(31,41,55)] font-light text-lg px-6 py-4">
          <li><Link href="/" className="hover:text-[rgb(192,87,70)] transition" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link></li>
          <li><Link href="/collection" className="hover:text-[rgb(192,87,70)] transition" onClick={() => setIsMenuOpen(false)}>{t('collection')}</Link></li>
          <li><Link href="/complaint-book" className="hover:text-[rgb(192,87,70)] transition" onClick={() => setIsMenuOpen(false)}>{t('complaint_book')}</Link></li>
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
    </header>
  );
}
