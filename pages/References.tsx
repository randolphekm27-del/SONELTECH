import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Star } from '../components/icons';

const testimonials = [
  { name: "Jean Dupont", company: "Industrie Manufacturière SA", text: "L'équipement de SONELTECH a transformé notre ligne de production. La fiabilité est inégalée, et l'équipe de support est toujours réactive.", rating: 5, image: 'https://picsum.photos/seed/ref1/100/100' },
  { name: "Sophie Martin", company: "Énergie Corp.", text: "Le programme de formation était exceptionnel. Nos ingénieurs sont maintenant plus confiants et compétents que jamais. Un investissement vraiment précieux.", rating: 5, image: 'https://picsum.photos/seed/ref2/100/100' },
  { name: "Samuel Roy", company: "Solutions Tech", text: "De la consultation à l'installation, le processus a été transparent. SONELTECH est un partenaire de confiance pour la qualité et l'expertise.", rating: 4, image: 'https://picsum.photos/seed/ref3/100/100' },
  { name: "Maria Garcia", company: "Pétrochimie Mondiale", text: "La solution de panneau de contrôle personnalisée qu'ils ont conçue pour nous a augmenté notre efficacité de 20%. Fortement recommandé pour les solutions sur mesure.", rating: 5, image: 'https://picsum.photos/seed/ref4/100/100' },
  { name: "David Chen", company: "Groupe Énergies Renouvelables", text: "Leurs appareillages sont de première qualité. Nous avons constaté une diminution significative des appels de maintenance depuis que nous sommes passés à SONELTECH.", rating: 5, image: 'https://picsum.photos/seed/ref5/100/100' },
  { name: "Émilie Blanc", company: "Logistique & Transport", text: "Le cours sur la sécurité électrique était très instructif et engageant. Le formateur était compétent et a rendu les sujets complexes faciles à comprendre.", rating: 4, image: 'https://picsum.photos/seed/ref6/100/100' },
];


const References: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="h-screen w-full page-hero flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/references-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
            style={{'--initial-rotate': '-1deg'} as React.CSSProperties}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 glass-effect rounded-3xl hidden md:block opacity-70 scale-125 animated-hero-glass water-shimmer">
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Références Clients</h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                Nous sommes fiers d'être un partenaire de confiance pour les leaders de l'industrie. Découvrez ce que nos clients disent de leur expérience avec SONELTECH.
              </p>
            </ScrollReveal>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                    <div className="card-hover-effect glass-effect p-8 rounded-xl border border-gray-200 h-full flex flex-col justify-between shadow-sm">
                        <div>
                            <div className="flex items-center mb-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4"/>
                                <div>
                                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                                </div>
                            </div>
                            <p className="italic text-gray-600">"{testimonial.text}"</p>
                        </div>
                        <div className="flex mt-6">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </main>
    </div>
  );
};

export default References;