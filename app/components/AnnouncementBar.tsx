'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AnnouncementBar() {
  const { t } = useTranslation('common');
  const textRef = useRef<HTMLParagraphElement>(null); // Referencia al elemento de texto
  const containerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor visible
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const animateMarquee = () => {
      if (textRef.current && containerRef.current) {
        const textWidth = textRef.current.offsetWidth; // Ancho real del texto
        const containerWidth = containerRef.current.offsetWidth; // Ancho del contenedor visible

        setPosition(prevPos => {
          let newPos = prevPos - 1; // Velocidad de desplazamiento
          // Si el texto se ha movido completamente fuera de la pantalla por la izquierda
          if (newPos < -textWidth) {
            newPos = containerWidth; // Reaparece por la derecha del contenedor
          }
          return newPos;
        });
      }
      animationFrameId = requestAnimationFrame(animateMarquee);
    };

    // Establecer la posición inicial del texto fuera de la pantalla a la derecha
    if (containerRef.current) {
      setPosition(containerRef.current.offsetWidth);
    }

    animationFrameId = requestAnimationFrame(animateMarquee);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[rgb(192,87,70)] text-white text-center py-2 text-lg font-semibold overflow-hidden relative">
      <p
          ref={textRef}
          className="whitespace-nowrap inline-block pr-4"
          style={{
            transform: `translateX(${position - 50}px)`,
          }}
        >
          {t('announcement_text')} <span className="mx-2"></span> {t('announcement_text')} <span className="mx-2"></span> {t('announcement_text')}
        </p>
    </div>
  );
}

