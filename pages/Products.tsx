import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProductDetailModal from '../components/ProductDetailModal';
import { useCart } from '../contexts/CartContext';

const productCategories = ['Tous', 'Transformateurs', 'Appareillages', 'Disjoncteurs', 'Panneaux de Contrôle'];

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  fullDescription: string;
  specs: {
    voltage: string;
    power: string;
    standard: string;
  };
};

const products: Product[] = [
  { id: 1, name: 'Transformateur Haute Tension', category: 'Transformateurs', image: 'https://picsum.photos/seed/prod1/500/350', price: "15,000€", description: 'Robuste et efficace pour les réseaux de distribution d\'énergie.', fullDescription: 'Le transformateur T-1000 est conçu pour les applications de haute tension les plus exigeantes. Sa construction robuste garantit une longue durée de vie et une fiabilité exceptionnelle, même dans des conditions environnementales difficiles. Il intègre les dernières technologies pour une efficacité énergétique maximale.', specs: { voltage: '110kV / 33kV', power: '50 MVA', standard: 'IEC 60076' } },
  { id: 2, name: 'Appareillage Moyenne Tension', category: 'Appareillages', image: 'https://picsum.photos/seed/prod2/500/350', price: "8,500€", description: 'Protection de circuit fiable pour les applications industrielles.', fullDescription: 'Notre appareillage de commutation isolé à l\'air offre une protection de circuit fiable et une maintenance réduite. Sa conception modulaire permet une installation et une expansion faciles, ce qui en fait un choix idéal pour les installations industrielles et commerciales.', specs: { voltage: '36 kV', power: '2500 A', standard: 'IEC 62271' } },
  { id: 3, name: 'Disjoncteur à Air', category: 'Disjoncteurs', image: 'https://picsum.photos/seed/prod3/500/350', price: "3,200€", description: 'Technologie avancée d\'extinction d\'arc pour la sécurité.', fullDescription: 'Le disjoncteur à air ACB-Pro utilise une technologie avancée d\'extinction d\'arc pour une interruption de courant sûre et rapide. Il est équipé d\'une unité de déclenchement électronique pour une protection précise et réglable.', specs: { voltage: '440 V', power: '4000 A', standard: 'IEC 60947-2' } },
  { id: 4, name: 'Panneau de Contrôle PLC', category: 'Panneaux de Contrôle', image: 'https://picsum.photos/seed/prod4/500/350', price: "6,800€", description: 'Automatisation personnalisable pour les processus complexes.', fullDescription: 'Nos panneaux de contrôle PLC sont conçus sur mesure pour répondre aux besoins spécifiques de vos processus d\'automatisation. Ils intègrent des automates programmables de grandes marques et une interface homme-machine intuitive pour un contrôle et une surveillance faciles.', specs: { voltage: '24 VDC', power: 'N/A', standard: 'UL 508A' } },
  { id: 5, name: 'Transformateur de Distribution', category: 'Transformateurs', image: 'https://picsum.photos/seed/prod5/500/350', price: "5,500€", description: 'Conception compacte pour les réseaux électriques urbains et ruraux.', fullDescription: 'Ce transformateur de distribution est optimisé pour les réseaux électriques urbains et ruraux. Sa conception compacte et ses faibles pertes en font une solution éco-énergétique pour la distribution d\'énergie secondaire.', specs: { voltage: '20kV / 400V', power: '1000 kVA', standard: 'EN 50588-1' } },
  { id: 6, name: 'Appareillage Isolé au Gaz', category: 'Appareillages', image: 'https://picsum.photos/seed/prod6/500/350', price: "12,300€", description: 'Solution peu encombrante et à faible maintenance.', fullDescription: 'L\'appareillage de commutation isolé au gaz (GIS) est la solution parfaite pour les postes électriques où l\'espace est limité. Son boîtier scellé protège les composants internes de l\'environnement, garantissant une grande fiabilité et une maintenance minimale.', specs: { voltage: '72.5 kV', power: '3150 A', standard: 'IEC 62271-203' } },
  { id: 7, name: 'Disjoncteur à Boîtier Moulé', category: 'Disjoncteurs', image: 'https://picsum.photos/seed/prod7/500/350', price: "450€", description: 'Protection polyvalente pour les bâtiments commerciaux.', fullDescription: 'Le disjoncteur à boîtier moulé (MCCB) offre une protection polyvalente et fiable contre les surcharges et les courts-circuits. Il est idéal pour les tableaux de distribution dans les bâtiments commerciaux et les applications industrielles légères.', specs: { voltage: '415 V', power: '250 A', standard: 'IEC 60947-2' } },
  { id: 8, name: 'Centre de Commande Moteur', category: 'Panneaux de Contrôle', image: 'https://picsum.photos/seed/prod8/500/350', price: "9,900€", description: 'Contrôle centralisé pour plusieurs moteurs électriques.', fullDescription: 'Le centre de commande de moteur (MCC) offre une solution centralisée pour le contrôle et la protection de plusieurs moteurs électriques. Sa conception modulaire permet une flexibilité maximale et une maintenance simplifiée.', specs: { voltage: '480 V', power: 'N/A', standard: 'IEC 61439' } },
];

const Products: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Tous');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const { addToCart } = useCart();
    const filteredProducts = activeCategory === 'Tous' ? products : products.filter(p => p.category === activeCategory);

    const handleAddToCart = (product: Product) => {
      addToCart(product);
      setSelectedProduct(null); // Close modal after adding to cart
    }

  return (
    <>
      <div className="bg-white">
        <section className="h-screen w-full page-hero flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/products-hero/1920/1080')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div 
            style={{'--initial-rotate': '-2deg'} as React.CSSProperties}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 glass-effect rounded-3xl hidden md:block opacity-70 scale-125 animated-hero-glass water-shimmer">
          </div>
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
              <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Nos Produits</h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                  Conçus pour la performance, construits pour la fiabilité. Explorez notre catalogue d'équipements électriques de pointe.
                </p>
              </ScrollReveal>
          </div>
        </section>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                  {productCategories.map(category => (
                      <button 
                          key={category}
                          onClick={() => setActiveCategory(category)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                          {category}
                      </button>
                  ))}
              </div>
              {/* Breadcrumbs */}
              <nav className="text-sm text-gray-500">
                  <NavLink to="/" className="hover:text-orange-500">Accueil</NavLink>
                  <span className="mx-2">/</span>
                  <span>Produits</span>
              </nav>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                  <ScrollReveal key={product.id} delay={index * 100}>
                      <div className="card-hover-effect glow-border group bg-white rounded-xl border border-gray-200 overflow-hidden h-full flex flex-col">
                          <div className="overflow-hidden">
                              <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                              <span className="text-xs font-semibold text-orange-500 uppercase">{product.category}</span>
                              <h3 className="mt-2 text-lg font-bold text-gray-800">{product.name}</h3>
                              <p className="mt-2 text-gray-500 text-sm flex-grow">{product.description}</p>
                              <button 
                                onClick={() => setSelectedProduct(product)}
                                className="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-all">
                                  Acheter ce produit
                              </button>
                          </div>
                      </div>
                  </ScrollReveal>
              ))}
          </div>
        </main>
      </div>
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default Products;