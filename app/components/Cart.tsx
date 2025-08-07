'use client';

import { useCart } from './CartContext';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Cart() {
  const { isCartOpen, toggleCart, cartItems, removeFromCart, getCartTotal } = useCart();
  const { t } = useTranslation('common');

  if (!isCartOpen) return null;

  return (
    <>
      <div className={`cart-sidebar fixed top-0 right-0 h-screen w-full md:w-1/3 bg-[rgb(239,235,224)] shadow-2xl p-6 flex flex-col z-50 ${isCartOpen ? 'cart-open' : ''}`}>
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">{t('shopping_cart')}</h2>
          <button onClick={toggleCart} className="text-[rgb(127,85,57)] hover:text-[rgb(192,87,70)]">
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-500">{t('cart_is_empty')}</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto my-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center gap-4">
                  <Image src={item.imageSrc} alt={item.name} width={64} height={64} className="rounded-md" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{t(item.name)}</h3>
                    <p className="text-gray-600">S/. {item.price}</p>
                    <p className="text-sm text-gray-500">{t('quantity')}: {item.quantity}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="border-t pt-4">
          <div className="flex justify-between items-center font-bold text-xl text-gray-800">
            <span>{t('total')}</span>
            <span className="text-[rgb(31,41,55)]">S/. {getCartTotal().toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 bg-[rgb(127,85,57)] text-white py-3 rounded-md text-lg font-semibold hover:bg-[rgb(166,128,106)] transition-colors">
            {t('checkout')}
          </button>
          <Link href="/collection" className="w-full mt-2 text-center text-[rgb(127,85,57)] hover:text-[rgb(192,87,70)] transition-colors duration-300 text-sm font-semibold block mx-auto underline">
            {t('view_catalog')}
          </Link>
        </div>
      </div>
    </>
  );
}
