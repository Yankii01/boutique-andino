'use client';

import { useCart } from './CartContext';
import { FaShoppingBag } from 'react-icons/fa';

export default function FloatingCartButton() {
  const { toggleCart, cartItems, getCartTotal } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button 
      onClick={toggleCart} 
      className="bg-peru-madera text-peru-crema px-4 py-2 rounded-full shadow-lg hover:bg-peru-madera/80 transition-colors duration-300 flex items-center justify-center gap-2"
      aria-label="Open shopping bag"
    >
      <FaShoppingBag className="text-xl" />
      <span className="text-lg font-semibold text-[rgb(31,41,55)]">S/. {getCartTotal().toFixed(2)}</span>
    </button>
  );
}
