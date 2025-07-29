'use client';

import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../../app/components/Footer';

export default function ComplaintBookPage() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-[rgb(239,235,224)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-[rgb(127,85,57)]">
              {t('complaint_book_title')}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {t('complaint_book_intro')}
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="full-name" className="sr-only">{t('full_name')}</label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[rgb(127,85,57)] focus:border-[rgb(127,85,57)] focus:z-10 sm:text-sm"
                  placeholder={t('full_name')}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">{t('email')}</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[rgb(127,85,57)] focus:border-[rgb(127,85,57)] focus:z-10 sm:text-sm"
                  placeholder={t('email')}
                />
              </div>
              <div>
                <label htmlFor="dni" className="sr-only">{t('dni')}</label>
                <input
                  id="dni"
                  name="dni"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[rgb(127,85,57)] focus:border-[rgb(127,85,57)] focus:z-10 sm:text-sm"
                  placeholder={t('dni')}
                />
              </div>
              <div>
                <label htmlFor="complaint-type" className="sr-only">{t('complaint_type')}</label>
                <select
                  id="complaint-type"
                  name="complaint-type"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[rgb(127,85,57)] focus:border-[rgb(127,85,57)] focus:z-10 sm:text-sm"
                >
                  <option value="">{t('select_complaint_type')}</option>
                  <option value="complaint">{t('complaint')}</option>
                  <option value="claim">{t('claim')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="details" className="sr-only">{t('details')}</label>
                <textarea
                  id="details"
                  name="details"
                  rows={6}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[rgb(127,85,57)] focus:border-[rgb(127,85,57)] focus:z-10 sm:text-sm"
                  placeholder={t('details')}
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[rgb(127,85,57)] hover:bg-[rgb(100,60,40)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(127,85,57)]"
              >
                {t('submit_complaint')}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
