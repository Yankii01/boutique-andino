'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definimos el tipo para un producto en el carrito (puede ser más complejo si es necesario)
interface CartItem {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  quantity: number;
}

// Definimos el tipo para el contexto del carrito
interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (itemId: number) => void;
  toggleCart: () => void;
  getCartTotal: () => number;
}

// Creamos el contexto con un valor por defecto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para usar el contexto del carrito fácilmente
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Props para el proveedor del carrito
interface CartProviderProps {
  children: ReactNode;
}

// Creamos el proveedor del carrito
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  };

  const value = {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    toggleCart,
    getCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
