import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const teamMembers = [
  { name: 'Dr. Évelyne Renaud', role: 'Fondatrice & PDG', image: 'https://picsum.photos/seed/team1/400/400' },
  { name: 'Marc Chen', role: 'Chef de l\'Ingénierie', image: 'https://picsum.photos/seed/team2/400/400' },
  { name: 'Aïcha Khan', role: 'Directrice des Formations', image: 'https://picsum.photos/seed/team3/400/400' },
  { name: 'Benoît Caron', role: 'Spécialiste Support Principal', image: 'https://picsum.photos/seed/team4/400/400' },
];

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="h-screen w-full page-hero flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/about-hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
         <div 
            style={{'--initial-rotate': '3deg'} as React.CSSProperties}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 glass-effect rounded-3xl hidden md:block opacity-70 scale-125 animated-hero-glass water-shimmer">
         </div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    À Propos de SONELTECH
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                    Pionniers de l'avenir des solutions électriques industrielles avec un engagement envers l'innovation, la qualité et l'éducation.
                </p>
            </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src="https://picsum.photos/seed/about-story/800/600" alt="Usine SONELTECH" className="rounded-lg shadow-xl" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="text-3xl font-bold text-gray-900">Notre Histoire</h2>
              <p className="mt-4 text-gray-600">
                Fondée en 2005, SONELTECH est née d'une vision : combler le fossé entre les équipements industriels de haute qualité et les professionnels qualifiés qui les utilisent. Nous avons commencé comme une petite équipe d'ingénieurs et de formateurs passionnés, dédiés à élever les standards de l'industrie.
              </p>
              <p className="mt-4 text-gray-600">
                Aujourd'hui, nous sommes un partenaire mondial de confiance pour des centaines d'entreprises, fournissant non seulement des composants, mais des solutions complètes qui améliorent la sécurité, l'efficacité et la productivité. Notre parcours est celui d'une innovation continue et d'un engagement sans faille envers le succès de nos clients.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <ScrollReveal>
                    <h2 className="text-3xl font-bold text-gray-900">Notre Mission & Vision</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Mission :</strong> Doter les industries des équipements électriques les plus fiables et de formations complètes, pour favoriser une main-d'œuvre mondiale plus sûre et plus productive.
                    </p>
                    <p className="mt-4 text-gray-600">
                        <strong>Vision :</strong> Être l'autorité mondiale et le partenaire le plus fiable en matière de solutions électriques industrielles, en établissant de nouvelles références en matière d'innovation et d'orientation client.
                    </p>
                 </ScrollReveal>
                 <ScrollReveal delay={200}>
                    <img src="https://picsum.photos/seed/about-mission/800/600" alt="Technologie innovante" className="rounded-lg shadow-xl" />
                </ScrollReveal>
            </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-gray-900">Rencontrez Notre Direction</h2>
            <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
              Animés par la passion et guidés par l'expertise, nos dirigeants sont les piliers de notre succès.
            </p>
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 150}>
                <div className="text-center">
                  <img src={member.image} alt={member.name} className="w-48 h-48 mx-auto rounded-full shadow-lg object-cover" />
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-orange-500 font-medium">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;