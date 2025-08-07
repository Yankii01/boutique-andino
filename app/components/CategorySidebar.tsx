'use client';

import { products } from '../data/products';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface CategorySidebarProps {
  selectedCategory: string | null;
}

export default function CategorySidebar({ selectedCategory }: CategorySidebarProps) {
  const { t } = useTranslation('common');
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <aside className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('categories')}</h2>
      <nav>
        <ul>
          <li>
            <Link href="/collection" className={`block py-2 px-4 rounded-md ${!selectedCategory ? 'bg-peru-madera text-white' : 'hover:bg-gray-100'}`}>
              {t('all_categories')}
            </Link>
          </li>
          {categories.map(category => (
            <li key={category}>
              <Link href={`/collection?category=${category}`} className={`block py-2 px-4 rounded-md ${selectedCategory === category ? 'bg-peru-madera text-white' : 'hover:bg-gray-100'}`}>
                {t(category)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
