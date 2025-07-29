'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface WelcomeSplashProps {
  onFinish: () => void;
}

export default function WelcomeSplash({ onFinish }: WelcomeSplashProps) {
  const router = useRouter();
  const { i18n } = useTranslation();

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 4500)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = (lng: string) => {
    i18n.changeLanguage(lng);
    setPhase(4);
    setTimeout(onFinish, 500);
    router.push('/');
  };

  return (
    <div className={`fixed inset-0 bg-[rgb(239,235,224)]/60 text-[rgb(127,85,57)] flex flex-col items-center justify-center z-[100] transition-opacity duration-500 ${phase === 4 ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Fase 1: Bienvenidos / Welcome */}
      <div className={`absolute transition-all duration-1000 ${phase === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-peru-madera md:text-6xl">Bienvenidos a</h1>
          <p className="text-2xl bg-peru-crema md:text-3xl">Welcome to</p>
        </div>
      </div>

      {/* Fase 2 y 3: Logo, Boutique Andino y Botones */}
      <div className={`flex flex-col items-center justify-center transition-all duration-1000 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative flex flex-col items-center justify-center">
          <span className="text-5xl text-center font-playlist text-peru-madera md:text-7xl">
            Boutique Andino
          </span>
          <div className="mt-4">
            <Image
              src="/logo.png"
              alt="Logo de Boutique Andino"
              width={120}
              height={120}
              className={`object-contain ${phase === 2 ? 'animate-zoom-in' : ''}`}
            />
          </div>
        </div>

        <div className={`w-full flex flex-col md:flex-row justify-center gap-8 mt-12 transition-opacity duration-1000 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          {/* Contenedor para Español */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-peru-madera md:text-2xl">Puedes entender esto?</p>
            <button onClick={() => handleEnter('es')} className="bg-[rgb(239,235,224)] backdrop-blur-md text-[rgb(127,85,57)] font-bold py-3 px-6 block overflow-hidden rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-102 hover:rotate-x-1 hover:rotate-y-1">
              Si
            </button>
          </div>

          {/* Contenedor para Inglés */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-peru-madera md:text-2xl">Can you understand this?</p>
            <button onClick={() => handleEnter('en')} className="bg-[rgb(239,235,224)] backdrop-blur-md text-[rgb(127,85,57)] font-bold py-3 px-6 block overflow-hidden rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-102 hover:rotate-x-1 hover:rotate-y-1">
              Yes
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom-in {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoom-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
}

