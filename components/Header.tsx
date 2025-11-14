import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Zap, ShoppingCart } from './icons';
import { useCart } from '../contexts/CartContext';


const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À Propos', path: '/about' },
  { name: 'Produits', path: '/products' },
  { name: 'Formations', path: '/training' },
  { name: 'Références', path: '/references' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#F97316',
    fontWeight: 600,
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md glass-effect' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors">
            <Zap className="w-8 h-8 text-orange-500" />
            <span>SONELTECH</span>
          </NavLink>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                {link.name}
              </NavLink>
            ))}
             <div className="flex items-center space-x-4">
                <button onClick={toggleCart} className="relative text-gray-600 hover:text-orange-500 transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {cartItems.length}
                    </span>
                  )}
                </button>
                <NavLink to="/registration" className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all btn-pulse">
                S'inscrire
                </NavLink>
            </div>
          </nav>
          
          <div className="lg:hidden flex items-center space-x-4">
             <button onClick={toggleCart} className="relative text-gray-800">
                  <ShoppingCart className="w-7 h-7" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {cartItems.length}
                    </span>
                  )}
                </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg absolute top-20 left-0 w-full shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 text-lg font-medium"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/registration" onClick={() => setIsMenuOpen(false)} className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all mt-4 btn-pulse">
              S'inscrire Maintenant
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;