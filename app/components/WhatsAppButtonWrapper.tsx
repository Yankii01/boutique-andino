'use client';

import FloatingWhatsAppButton from './FloatingWhatsAppButton';
import { useCart } from './CartContext';

interface WhatsAppButtonWrapperProps {
  isMenuOpen: boolean;
}

export default function WhatsAppButtonWrapper({ isMenuOpen }: WhatsAppButtonWrapperProps) {
  const { isCartOpen } = useCart();

  return (
    <div className={`fixed bottom-4 right-4 flex flex-col gap-3 z-50 transition-transform duration-300 ease-in-out ${isCartOpen ? '-translate-x-[550px]' : (isMenuOpen ? '-translate-x-64' : 'translate-x-0')}`}>
      <FloatingWhatsAppButton />
    </div>
  );
}
