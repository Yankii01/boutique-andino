'use client';

// app/contact/page.tsx
import { useTranslation } from 'react-i18next';

// app/contact/page.tsx
export default function ContactPage() {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('contact')}</h1>
      <p>Ponte en contacto con nosotros a través de este formulario.</p>
      {/* {t('contact_form_coming_soon')} */}
    </div>
  );
}