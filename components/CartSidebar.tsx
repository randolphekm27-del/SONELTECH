import React from 'react';
import { useCart } from '../contexts/CartContext';
import { X } from './icons';
import { useNavigate } from 'react-router-dom';

const CartSidebar: React.FC = () => {
  const { isCartOpen, toggleCart, cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/€/g, '').replace(/,/g, ''));
    return acc + price;
  }, 0);

  const handleCheckout = () => {
    toggleCart();
    navigate('/registration');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[60] transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Votre Panier</h2>
            <button onClick={toggleCart} className="text-gray-500 hover:text-gray-800">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Votre panier est vide.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.id} className="flex items-start space-x-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-grow">
                      <p className="font-semibold text-sm text-gray-800">{item.name}</p>
                      <p className="text-orange-500 font-bold">{item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-800">Total:</span>
                    <span className="text-xl font-bold text-orange-500">{total.toLocaleString('fr-FR')}€</span>
                </div>
                <button 
                    onClick={handleCheckout}
                    className="w-full py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-transform hover:scale-105">
                    Passer à l'achat
                </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;