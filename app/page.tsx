'use client';
import { products } from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import AnnouncementBar from './components/AnnouncementBar';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <main className="text-foreground relative backdrop-blur-sm bg-[rgb(245,245,220)]">

        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center pt-24 relative overflow-hidden">
          {/* Blurred background image div */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm" style={{ backgroundImage: "url('/hero.jpg')" }}></div>
          {/* Content div - ensure it's above the blurred background */}
          <div  className="bg-peru-madera/60 p-8 rounded-xl text-center max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-peru-crema mb-4">{t('welcome')}</h2>
            <p className="text-peru-crema text-lg">{t('slogan')}</p>
          </div>
        </section>

        {/* Barra de Anuncio */}
        <AnnouncementBar />

        {/* Colección */}
        <section id="coleccion" className="py-20 px-6 bg-[rgb(239,235,224)] backdrop-blur-sm">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-[rgb(127,85,57)]">{t('collection')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section id="nosotros" className="py-20 bg-[rgb(127,85,57)] backdrop-blur-sm">
          <div className="w-full flex flex-col md:flex-row items-center gap-12 bg-[rgb(239,235,224)] p-8 rounded-lg shadow-lg">
            <Image src="/Tienda.png" alt="Nosotros" width={500} height={500} className="w-full md:w-1/2 rounded-lg shadow" />
            <div className="p-0">
              <h2 className="text-3xl font-bold mb-4 text-[rgb(127,85,57)]">{t('our_history_title')}</h2>
              <p className="leading-relaxed text-[rgb(127,85,57)]">
                {t('our_history_text')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Contacto */}
        <section id="contacto" className="py-16 bg-[rgb(239,235,224)] backdrop-blur-sm text-center">
          <h2 className="text-2xl font-bold mb-4 text-[rgb(127,85,57)]">¿Quieres conocer más?</h2>
          <p className="text-[rgb(127,85,57)] leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('map_section_description')}
          </p>
          <div className="flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.87414919284356!2d-77.03219629588015!3d-12.044457407442113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9b44f063fab%3A0xd2bb14a658154b64!2sBoutique%20Andino!5e0!3m2!1ses-419!2spe!4v1753736696075!5m2!1ses-419!2spe" width="100%" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>

        
        <Footer />
      </main>
    </div>
  );
}