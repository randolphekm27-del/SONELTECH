import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Training from './pages/Training';
import References from './pages/References';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import CartSidebar from './components/CartSidebar';
import { useCart } from './contexts/CartContext';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  const { isCartOpen } = useCart();

  useEffect(() => {
    if(isCartOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }
  }, [isCartOpen])

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/training" element={<Training />} />
            <Route path="/references" element={<References />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <CartSidebar />
    </>
  );
};

export default App;