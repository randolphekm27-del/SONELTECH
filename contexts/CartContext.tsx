import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../pages/Products';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // For simplicity, we just add another instance. A real cart might increment quantity.
        return [...prevItems, { ...product, quantity: 1 }];
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart when item is added
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};