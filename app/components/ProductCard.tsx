'use client'
// app/components/ProductCard.tsx

import Image from 'next/image';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Definimos el tipo para las props del producto para mayor claridad y seguridad.
type Product = {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  sizes: string[]; // Tallas disponibles
  rating: number; // Valoración del producto (ej: 4.5)
  availableColors?: string[]; // Colores disponibles
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product.availableColors?.[0]);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes?.[0]);
  const { t } = useTranslation('common');

  return (
    <a
      href={product.href}
      onClick={(e) => e.preventDefault()}
      className="group relative block overflow-hidden rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-102 hover:rotate-x-1 hover:rotate-y-1"
    >
      {/* Imagen del producto */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-peru-crema relative">
        <Image
          src={product.imageSrc}
          alt={t(product.imageAlt)}
          width={400}
          height={400}
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105 opacity-50 group-hover:opacity-100"
        />
        {/* Efecto Spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-peru-rojo/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      {/* Información del producto */}
      <div className="p-4 bg-peru-crema">
        <h3 className="text-lg font-semibold text-[rgb(127,85,57)]">
          {t(product.name)}
        </h3>

        {/* Rating */}
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
            />
          ))}
          <span className="ml-1 text-sm text-peru-tierra">({product.rating.toFixed(1)})</span>
        </div>

        {/* Selector de tallas */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-2">
            <label htmlFor="size-select" className="sr-only">
              Size
            </label>
            <select
              id="size-select"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-peru-rojo focus:border-peru-rojo sm:text-sm rounded-md"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Selector de colores */}
        {product.availableColors && product.availableColors.length > 0 && (
          <div className="mt-2">
            <label htmlFor="color-select" className="block text-sm font-medium text-peru-madera">
              Color:
            </label>
            <div className="flex space-x-2 mt-1">
              {product.availableColors.map((color, index) => (
                <span
                  key={index}
                  className={`h-6 w-6 rounded-full border-2 ${
                    selectedColor === color ? 'border-peru-rojo' : 'border-peru-arena'
                  } cursor-pointer`}
                  style={{ backgroundColor: color }}
                  title={color}
                  onClick={() => setSelectedColor(color)}
                ></span>
              ))}
            </div>
          </div>
        )}

        {/* Precio */}
        <p className="mt-2 text-xl font-bold text-[rgb(127,85,57)]">
          S/. {product.price.replace('$', '')}
        </p>

        {/* Botón de agregar al carrito */}
        <button className="mt-4 w-full bg-[rgb(192,87,70)] text-white py-2 px-4 rounded-md hover:bg-[rgb(127,85,57)] focus:outline-none focus:ring-2 focus:ring-[rgb(192,87,70)] focus:ring-offset-2">
          {t('add_to_cart')}
        </button>
      </div>
    </a>
  );
}
