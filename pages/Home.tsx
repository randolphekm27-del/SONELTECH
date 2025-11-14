import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, ShieldCheck, GraduationCap, Wrench, Building, Lightbulb, Leaf } from '../components/icons';
import ScrollReveal from '../components/ScrollReveal';

const valueProps = [
  { icon: Zap, title: "Équipement de Pointe", description: "Accédez aux dernières technologies électriques industrielles pour une efficacité et des performances maximales." },
  { icon: GraduationCap, title: "Formations d'Experts", description: "Améliorez les compétences de votre équipe avec des cours certifiés dirigés par des vétérans de l'industrie." },
  { icon: ShieldCheck, title: "Fiabilité Inégalée", description: "Nos produits subissent des tests rigoureux pour garantir qu'ils respectent les normes de sécurité et de durabilité les plus élevées." },
  { icon: Wrench, title: "Support Dédié", description: "Bénéficiez de notre support technique 24/7 et de nos services de maintenance pour minimiser les temps d'arrêt." }
];

const homeSections = [
    {
        title: "Nos Catégories de Produits",
        description: "Une gamme complète d'équipements conçus pour la performance et la durabilité.",
        image: "https://picsum.photos/seed/home-prod/800/600",
        link: "/products",
        buttonText: "Explorer les produits"
    },
    {
        title: "Nos Formations Certifiantes",
        description: "Des programmes intensifs pour maîtriser les compétences de demain.",
        image: "https://picsum.photos/seed/home-train/800/600",
        link: "/training",
        buttonText: "Voir les formations"
    },
     {
        title: "Nos Références Clients",
        description: "Découvrez pourquoi les leaders de l'industrie nous font confiance.",
        image: "https://picsum.photos/seed/home-ref/800/600",
        link: "/references",
        buttonText: "Lire les témoignages"
    },
    {
        title: "Un Projet en Tête ?",
        description: "Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos projets.",
        image: "https://picsum.photos/seed/home-contact/800/600",
        link: "/contact",
        buttonText: "Nous contacter"
    }
];

const partners = [
    { name: 'ElectroCorp', logo: 'https://picsum.photos/seed/logo1/200/100?grayscale' },
    { name: 'PowerGrid Inc.', logo: 'https://picsum.photos/seed/logo2/200/100?grayscale' },
    { name: 'Volt-Amper', logo: 'https://picsum.photos/seed/logo3/200/100?grayscale' },
    { name: 'TechnoVolt', logo: 'https://picsum.photos/seed/logo4/200/100?grayscale' },
    { name: 'Innovatech', logo: 'https://picsum.photos/seed/logo5/200/100?grayscale' },
];

const news = [
    { title: "L'Avenir de la Domotique Industrielle", image: "https://picsum.photos/seed/news1/500/350", excerpt: "Découvrez comment l'IoT transforme le paysage industriel...", link: "#" },
    { title: "Normes de Sécurité 2024 : Ce Qui Change", image: "https://picsum.photos/seed/news2/500/350", excerpt: "Un guide complet sur les dernières mises à jour réglementaires...", link: "#" },
    { title: "Optimisation Énergétique : 5 Astuces", image: "https://picsum.photos/seed/news3/500/350", excerpt: "Réduisez vos coûts et votre empreinte carbone avec nos conseils...", link: "#" },
];

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="h-screen w-full page-hero flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/soneltech-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
            style={{'--initial-rotate': '-6deg'} as React.CSSProperties}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 glass-effect rounded-3xl hidden md:block opacity-70 scale-125 animated-hero-glass water-shimmer">
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Énergiser l'Industrie,
                    <br/>
                    <span className="text-white">Valoriser l'Humain.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                    SONELTECH fournit des équipements électriques de pointe et des formations expertes pour propulser votre entreprise avec une puissance et une précision inégalées.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <NavLink to="/products" className="w-full sm:w-auto bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all btn-pulse">
                        Découvrir nos Produits
                    </NavLink>
                    <NavLink to="/training" className="w-full sm:w-auto bg-white/20 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/30 transition-all backdrop-blur-sm border border-white/30">
                        Voir nos Formations
                    </NavLink>
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Section 1: Pourquoi choisir SONELTECH ? */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">Pourquoi choisir SONELTECH ?</h2>
            <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
              Plus qu'un fournisseur, nous sommes votre partenaire de progrès, engagés pour la qualité, l'innovation et votre succès.
            </p>
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <ScrollReveal key={prop.title} delay={index * 150}>
                <div className="card-hover-effect glow-border p-8 h-full bg-white rounded-xl border border-gray-200 text-center">
                  <div className="inline-block bg-orange-500/10 p-4 rounded-full">
                    <prop.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-800">{prop.title}</h3>
                  <p className="mt-2 text-gray-500">{prop.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sections 2, 3, 4, 5: Cartes imagées */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {homeSections.map((section, index) => (
                    <ScrollReveal key={index} delay={index * 150}>
                        <div className="card-hover-effect glow-border group bg-white rounded-xl border border-gray-200 overflow-hidden h-full flex flex-col">
                           <div className="overflow-hidden">
                                <img src={section.image} alt={section.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-8 text-center flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                                <p className="mt-2 text-gray-500 flex-grow">{section.description}</p>
                                <NavLink to={section.link} className="mt-6 w-full max-w-xs mx-auto bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all">
                                    {section.buttonText}
                                </NavLink>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
           </div>
        </div>
      </section>

      {/* NEW Section: Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
                <h2 className="text-3xl font-bold text-center text-gray-800">Nos Partenaires de Confiance</h2>
                <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
                    Nous collaborons avec les plus grands noms de l'industrie pour vous offrir le meilleur.
                </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {partners.map(partner => (
                        <img key={partner.name} src={partner.logo} alt={partner.name} className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
                    ))}
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* NEW Section: Engagements */}
      <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                  <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">Nos Engagements</h2>
                  <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
                      Notre éthique de travail repose sur trois piliers fondamentaux.
                  </p>
              </ScrollReveal>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <ScrollReveal delay={0}>
                      <div className="p-8">
                          <div className="inline-block bg-orange-500/10 p-4 rounded-full"><Building className="w-10 h-10 text-orange-500"/></div>
                          <h3 className="mt-6 text-xl font-semibold text-gray-800">Qualité Supérieure</h3>
                          <p className="mt-2 text-gray-500">Des produits et services qui dépassent les normes les plus strictes.</p>
                      </div>
                  </ScrollReveal>
                  <ScrollReveal delay={150}>
                       <div className="p-8">
                          <div className="inline-block bg-orange-500/10 p-4 rounded-full"><Lightbulb className="w-10 h-10 text-orange-500"/></div>
                          <h3 className="mt-6 text-xl font-semibold text-gray-800">Innovation Constante</h3>
                          <p className="mt-2 text-gray-500">Anticiper les besoins du marché avec des solutions avant-gardistes.</p>
                      </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                       <div className="p-8">
                          <div className="inline-block bg-orange-500/10 p-4 rounded-full"><Leaf className="w-10 h-10 text-orange-500"/></div>
                          <h3 className="mt-6 text-xl font-semibold text-gray-800">Durabilité & Responsabilité</h3>
                          <p className="mt-2 text-gray-500">Promouvoir des pratiques respectueuses de l'environnement et de la société.</p>
                      </div>
                  </ScrollReveal>
              </div>
          </div>
      </section>

      {/* NEW Section: News */}
       <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">Actualités de l'Industrie</h2>
            <p className="mt-4 text-center text-lg text-gray-500 max-w-2xl mx-auto">
                Restez informé des dernières tendances et innovations du secteur électrique.
            </p>
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 150}>
                <div className="card-hover-effect glow-border group bg-white rounded-xl border border-gray-200 overflow-hidden h-full flex flex-col">
                    <div className="overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                        <p className="mt-2 text-gray-500 text-sm flex-grow">{item.excerpt}</p>
                        <a href={item.link} className="mt-4 text-orange-500 font-semibold hover:underline">Lire la suite &rarr;</a>
                    </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;