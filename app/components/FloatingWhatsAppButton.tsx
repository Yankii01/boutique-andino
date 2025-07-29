'use client';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FloatingWhatsAppButton() {
  const [showText, setShowText] = useState(false);
  const { t } = useTranslation('common');

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      {showText && (
        <span className="mr-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap flex items-center">
          {t('whatsapp_message')}
          <span className="ml-1">
            <span className="animate-dot-fade animation-delay-100">.</span>
            <span className="animate-dot-fade animation-delay-200">.</span>
            <span className="animate-dot-fade animation-delay-300">.</span>
          </span>
        </span>
      )}
      <Link
        href="https://wa.me/51944141881"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </Link>
    </div>
  );
}
