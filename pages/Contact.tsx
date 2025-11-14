import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="h-screen w-full page-hero flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/contact-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
            style={{'--initial-rotate': '2deg'} as React.CSSProperties}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 glass-effect rounded-3xl hidden md:block opacity-70 scale-125 animated-hero-glass water-shimmer">
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Nous Contacter</h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                  Nous sommes là pour vous aider. Contactez-nous pour des demandes de vente, un support technique ou des informations sur les formations.
                </p>
            </ScrollReveal>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
                <div className="glass-effect p-8 rounded-xl border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <input type="text" placeholder="Votre Nom" className="w-full p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                             <input type="email" placeholder="Votre Email" className="w-full p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        <input type="text" placeholder="Sujet" className="w-full p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        <textarea placeholder="Votre Message" rows={5} className="w-full p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                        <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-transform hover:scale-105">
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Coordonnées</h2>
                    <div className="space-y-4 text-gray-600">
                        <p><strong>Adresse :</strong> 123 Voie Industrielle, Cité Électra, 45678</p>
                        <p><strong>Téléphone Ventes :</strong> +33 1 80 55 50 01</p>
                        <p><strong>Téléphone Support :</strong> +33 1 80 55 50 02</p>
                        <p><strong>Email :</strong> contact@soneltech.fr</p>
                        <p><strong>Horaires :</strong> Lundi - Vendredi, 8:00 - 18:00</p>
                    </div>
                    <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625693759!2d2.292292615674396!3d48.85837007928751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sfr!2sfr!4v1628000000000!5m2!1sfr!2sfr" 
                            width="100%" 
                            height="300" 
                            style={{ border: 0 }} 
                            allowFullScreen={false} 
                            loading="lazy"
                            title="Emplacement de l'entreprise"
                        ></iframe>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </main>
    </div>
  );
};

export default Contact;