'use client';
import { products } from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import AnnouncementBar from './components/AnnouncementBar';

interface ArticleSectionProps {
  category: string;
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}

const ArticleSection = ({ category, title, description, images, reverse = false }: ArticleSectionProps) => {
  const { t } = useTranslation('common');

  const imageCollage = (
    <div className="w-full md:w-1/2 relative h-96 flex items-center justify-center">
      <div className="absolute w-64 h-64 transform rotate-12 -translate-x-16 -translate-y-16 shadow-2xl rounded-lg overflow-hidden">
        <Image src={images[0]} alt={`${title} 1`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="absolute w-56 h-56 transform -rotate-6 translate-x-10 shadow-2xl rounded-lg overflow-hidden z-10">
        <Image src={images[1]} alt={`${title} 2`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="absolute w-48 h-48 transform rotate-3 translate-x-32 translate-y-24 shadow-2xl rounded-lg overflow-hidden">
        <Image src={images[2]} alt={`${title} 3`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transform hover:scale-110 transition-transform duration-500" />
      </div>
    </div>
  );

  const textContent = (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-extrabold text-[rgb(31,41,55)] mb-4">{title}</h2>
      <p className="text-lg text-[rgb(31,41,55)] mb-8 max-w-md mx-auto md:mx-0">{description}</p>
      <Link href={`/collection?category=${category}`} className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 px-10 rounded-full text-lg font-bold shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
          {t('explore')} {title}
      </Link>
    </div>
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          {imageCollage}
          {textContent}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <main className="text-foreground relative backdrop-blur-sm bg-[rgb(239,235,224)]">

        {/* Hero Section */}
        <section className="h-[60vh] md:h-screen flex items-center justify-center pt-[400px] relative overflow-hidden">
          <video className="absolute inset-0 object-cover w-full h-full" autoPlay loop muted playsInline>
            <source src="/bannerV1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="bg-peru-madera/60 p-8 rounded-xl text-center max-w-2xl relative z-10 slogan-animation translate-y-16">
            <p className="text-white text-lg text-shadow-md">{t('slogan')}</p>
          </div>
        </section>

        <AnnouncementBar />

        {/* Lo Más Vendido */}
        <div id="lo-mas-vendido" className="py-10">
          <h2 className="text-4xl font-bold text-center text-[rgb(31,41,55)] mb-12">{t('best_sellers')}</h2>
          <ArticleSection 
            category="ruana"
            title={t('Ruanas')}
            description={t('ruana_description')}
            images={[
              '/productos/ruana/ruanaChacanaBeige2.png',
              '/productos/ruana/ruanaChacanaBeige1.png',
              '/productos/ruana/ruanaChacanaBeige3.png'
            ]}
          />
          <ArticleSection 
            category="poncho"
            title={t('Ponchos')}
            description={t('poncho_description')}
            images={[
              '/productos/poncho/ponchoCFChacanaPlomo2.png',
              '/productos/poncho/ponchoCFChacanaPlomo3.png',
              '/productos/poncho/ponchoCFChacanaPlomo1.png'
            ]}
            reverse={true}
          />
          <ArticleSection 
            category="accesorios"
            title={t('Accessories')}
            description={t('accessories_description')}
            images={[
              '/productos/accesorios/mitonesLLama1.png',
              '/productos/accesorios/calcetinDCE1.png',
              '/productos/accesorios/guantesReversibles1.png'
            ]}
          />
        </div>

        {/* Sobre Nosotros */}
        <section id="nosotros" className="py-20 bg-[rgb(127,85,57)] backdrop-blur-sm">
          <div className="w-full flex flex-col md:flex-row items-center gap-12 bg-[rgb(239,235,224)] p-8 rounded-lg shadow-lg">
            <Image src="/Tienda.png" alt="Nosotros" width={500} height={500} className="w-full md:w-1/2 rounded-lg shadow" />
            <div className="p-0">
              <h2 className="text-3xl font-bold mb-4 text-[rgb(31,41,55)]">{t('our_history_title')}</h2>
              <p className="leading-relaxed text-[rgb(31,41,55)]">
                {t('our_history_text')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Contacto */}
        <section id="contacto" className="py-16 bg-[rgb(239,235,224)] backdrop-blur-sm text-center">
          <h2 className="text-2xl font-bold mb-4 text-[rgb(31,41,55)]">¿Quieres conocer más?</h2>
          <p className="text-[rgb(31,41,55)] leading-relaxed mb-8 max-w-3xl mx-auto">
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