
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, Twitter, Linkedin, Facebook } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <NavLink to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
              <Zap className="w-8 h-8 text-orange-500" />
              <span>SONELTECH</span>
            </NavLink>
            <p className="mt-4 text-sm text-gray-500">
              Leader des solutions électriques industrielles et de l'excellence technique.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 tracking-wider uppercase">Liens Rapides</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/about" className="text-sm text-gray-500 hover:text-orange-500">À Propos</NavLink></li>
              <li><NavLink to="/products" className="text-sm text-gray-500 hover:text-orange-500">Produits</NavLink></li>
              <li><NavLink to="/training" className="text-sm text-gray-500 hover:text-orange-500">Formations</NavLink></li>
              <li><NavLink to="/contact" className="text-sm text-gray-500 hover:text-orange-500">Contact</NavLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/legal#faq" className="text-sm text-gray-500 hover:text-orange-500">FAQ</NavLink></li>
              <li><NavLink to="/legal" className="text-sm text-gray-500 hover:text-orange-500">Politique de Confidentialité</NavLink></li>
              <li><NavLink to="/legal" className="text-sm text-gray-500 hover:text-orange-500">Conditions de Service</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-500">Restez informé de nos dernières actualités et produits.</p>
            <form className="mt-4 flex">
              <input type="email" placeholder="Votre Email" className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button type="submit" className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-opacity-90 transition-colors">Go</button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SONELTECH. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
