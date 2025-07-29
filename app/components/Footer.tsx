'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'; // Import Link component

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-[rgb(127,85,57)] py-10 text-[rgb(239,235,224)]">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold text-[rgb(239,235,224)]">{t('footer_brand_name')}</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-sm mt-4 md:mt-0">© 2025 Boutique Andino. {t('all_rights_reserved')}</p>
          <Link href="/complaint-book" className="text-sm hover:underline mt-2 md:mt-0 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
            </svg>
            {t('complaint_book')}
          </Link>
        </div>
      </div>
    </footer>
  );
}