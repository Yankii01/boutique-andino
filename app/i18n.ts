import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'; // Importar el backend HTTP

const i18nInstance = i18n.use(initReactI18next);

if (typeof window !== 'undefined') {
  i18nInstance.use(LanguageDetector);
  i18nInstance.use(Backend); // Usar el backend HTTP
}

i18nInstance.init({
  fallbackLng: 'es',
  debug: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta para cargar los archivos de traducción
  },
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;