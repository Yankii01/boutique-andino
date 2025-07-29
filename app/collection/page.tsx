'use client';

import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useTranslation } from 'react-i18next';

export default function CollectionPage() {
  const { t } = useTranslation('common');

  return (
    <div className="bg-[rgb(245,245,220)]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[rgb(127,85,57)]">{t('collection')}</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        
        </div>
      </div>
    </div>
  );
}