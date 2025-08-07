'use client';

import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';
import CategorySidebar from '../components/CategorySidebar';

export default function CollectionPage() {
  const { t } = useTranslation('common');
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="bg-[rgb(245,245,220)]">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <CategorySidebar selectedCategory={category} />

          <main className="w-full md:w-3/4">
            <h2 className="text-3xl font-bold tracking-tight text-[rgb(127,85,57)] mb-8">
              {category ? t(category) : t('collection')}
            </h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}