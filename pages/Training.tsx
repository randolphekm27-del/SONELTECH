import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const courses = [
  { id: 1, title: 'Maintenance Avancée des Appareillages', level: 'Expert', duration: '5 Jours', image: 'https://picsum.photos/seed/train1/500/350', summary: 'Formation pratique approfondie pour les systèmes d\'appareillage complexes.' },
  { id: 2, title: 'Sécurité & Conformité Électrique (NFPA 70E)', level: 'Intermédiaire', duration: '3 Jours', image: 'https://picsum.photos/seed/train2/500/350', summary: 'Maîtrisez les protocoles de sécurité critiques et les normes réglementaires.' },
  { id: 3, title: 'Fondamentaux de la Programmation PLC', level: 'Débutant', duration: '4 Jours', image: 'https://picsum.photos/seed/train3/500/350', summary: 'Apprenez à programmer et dépanner les systèmes de contrôle modernes.' },
  { id: 4, title: 'Diagnostic & Test des Transformateurs', level: 'Expert', duration: '5 Jours', image: 'https://picsum.photos/seed/train4/500/350', summary: 'Techniques avancées pour évaluer la santé des transformateurs.' },
  { id: 5, title: 'Bases de l\'Automatisation Industrielle', level: 'Débutant', duration: '3 Jours', image: 'https://picsum.photos/seed/train5/500/350', summary: 'Une introduction aux concepts fondamentaux de l\'automatisation.' },
  { id: 6, title: 'Analyse de la Qualité de l\'Énergie', level: 'Intermédiaire', duration: '4 Jours', image: 'https://picsum.photos/seed/train6/500/350', summary: 'Identifiez et résolvez les problèmes de qualité de l\'énergie dans votre installation.' },
];

const Training: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="h-screen w-full page-hero flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/training-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
            style={{'--initial-rotate': '1deg'} as React.CSSProperties}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 glass-effect rounded-3xl hidden md:block opacity-70 scale-125 animated-hero-glass water-shimmer">
        </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Formations Professionnelles</h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                Donnez à votre équipe les connaissances et les compétences pour exceller. Nos cours certifiés sont conçus pour une application réelle.
              </p>
            </ScrollReveal>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-end items-center mb-12">
            <nav className="text-sm text-gray-500">
                <NavLink to="/" className="hover:text-orange-500">Accueil</NavLink>
                <span className="mx-2">/</span>
                <span>Formations</span>
            </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
                <ScrollReveal key={course.id} delay={index * 100}>
                    <div className="card-hover-effect glow-border group bg-white rounded-xl border border-gray-200 overflow-hidden h-full flex flex-col">
                        <div className="overflow-hidden">
                            <img src={course.image} alt={course.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-semibold text-orange-500 bg-orange-500/10 px-2 py-1 rounded">{course.level}</span>
                                <span className="text-gray-500">{course.duration}</span>
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-800">{course.title}</h3>
                            <p className="mt-2 text-gray-500 text-sm flex-grow">{course.summary}</p>
                            <NavLink to="/registration" className="text-center mt-6 w-full bg-green-600 text-white px-4 py-2.5 rounded-full font-semibold hover:bg-green-700 transition-all">
                                S'inscrire maintenant
                            </NavLink>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Training;