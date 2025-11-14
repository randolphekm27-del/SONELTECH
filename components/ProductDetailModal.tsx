import React from 'react';
import { Product } from '../pages/Products';
import { X } from './icons';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-64 md:h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-sm font-semibold text-orange-500 uppercase">{product.category}</span>
                    <h2 className="text-3xl font-bold text-gray-800 mt-1">{product.name}</h2>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
                    <X className="w-6 h-6" />
                </button>
            </div>
            
            <p className="mt-4 text-gray-600">{product.fullDescription}</p>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Spécifications Techniques</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>Voltage:</strong> {product.specs.voltage}</li>
                    <li><strong>Puissance:</strong> {product.specs.power}</li>
                    <li><strong>Standard:</strong> {product.specs.standard}</li>
                </ul>
            </div>
            
            <div className="mt-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-3xl font-extrabold text-orange-500">{product.price}</span>
                <button onClick={() => onAddToCart(product)} className="w-full sm:w-auto bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-transform hover:scale-105">
                    Oui, je le veux
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;