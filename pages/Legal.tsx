import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const faqs = [
  { question: "Quelle est la garantie sur vos produits ?", answer: "Tous les produits SONELTECH bénéficient d'une garantie constructeur standard de 2 ans couvrant les défauts de matériaux et de fabrication. Des options de garantie prolongée sont disponibles au moment de l'achat." },
  { question: "Comment puis-je m'inscrire à une formation ?", answer: "Vous pouvez vous inscrire à nos formations directement via la page 'Formations' de notre site web. Sélectionnez simplement un cours et cliquez sur 'S'inscrire maintenant' pour remplir le formulaire." },
  { question: "Proposez-vous des solutions sur mesure ?", answer: "Oui, nous sommes spécialisés dans la création de solutions électriques sur mesure adaptées à vos besoins spécifiques. Veuillez contacter notre équipe commerciale via la page 'Nous Contacter' pour discuter des exigences de votre projet." },
  { question: "Quelles sont vos politiques d'expédition ?", answer: "Nous expédions dans le monde entier depuis notre centre de distribution central. Les délais de livraison standard varient selon la destination. Des options d'expédition accélérée sont disponibles lors du paiement. Tous les envois sont entièrement assurés." },
];

const FaqItem: React.FC<{ q: string; a: string; }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center py-4">
                <span className="font-semibold text-gray-800">{q}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isOpen && <div className="pb-4 text-gray-600">{a}</div>}
        </div>
    );
}

const Legal: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="h-screen w-full page-hero flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/legal-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
            style={{'--initial-rotate': '1deg'} as React.CSSProperties}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 glass-effect rounded-3xl hidden md:block opacity-70 scale-125 animated-hero-glass water-shimmer">
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Mentions Légales & Support</h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                    Informations importantes concernant nos politiques et réponses aux questions fréquentes.
                </p>
            </ScrollReveal>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 divide-y-2 divide-gray-200">
        <section id="privacy" className="py-12">
            <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Politique de Confidentialité</h2>
                <div className="prose max-w-none text-gray-600 space-y-4">
                    <p>Votre vie privée est importante pour nous. La politique de SONELTECH est de respecter votre vie privée concernant toute information que nous pourrions collecter sur notre site web et autres sites que nous possédons et exploitons.</p>
                    <p>Nous ne demandons des informations personnelles que lorsque nous en avons réellement besoin pour vous fournir un service. Nous les collectons par des moyens justes et légaux, avec votre connaissance et votre consentement. Nous vous informons également pourquoi nous les collectons et comment elles seront utilisées.</p>
                    <p>Nous ne conservons les informations collectées que le temps nécessaire pour vous fournir le service demandé. Les données que nous stockons, nous les protégeons par des moyens commercialement acceptables pour prévenir la perte et le vol, ainsi que l'accès, la divulgation, la copie, l'utilisation ou la modification non autorisés.</p>
                    <p>Nous ne partageons aucune information d'identification personnelle publiquement ou avec des tiers, sauf lorsque la loi l'exige.</p>
                </div>
            </ScrollReveal>
        </section>

        <section id="faq" className="py-12">
            <ScrollReveal>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Foire Aux Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} q={faq.question} a={faq.answer} />
                    ))}
                </div>
            </ScrollReveal>
        </section>
      </main>
    </div>
  );
};

export default Legal;