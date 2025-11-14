import React, { useState } from 'react';
import { UploadCloud } from '../components/icons';
import ScrollReveal from '../components/ScrollReveal';

const totalSteps = 3;

const Registration: React.FC = () => {
    const [step, setStep] = useState(1);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };
    
    const progressPercentage = ((step - 1) / (totalSteps -1)) * 100;

    return (
        <div className="bg-white">
            <section className="h-screen w-full page-hero flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/registration-hero/1920/1080')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div 
                    style={{'--initial-rotate': '-3deg'} as React.CSSProperties}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 glass-effect rounded-3xl hidden md:block opacity-70 scale-125 animated-hero-glass water-shimmer">
                </div>
                <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Inscription</h1>
                        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                            Rejoignez nos programmes ou devenez notre partenaire. Suivez les étapes ci-dessous pour commencer.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-2xl mx-auto glass-effect border border-gray-200 rounded-2xl shadow-lg p-8">
                    {/* Progress Bar */}
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-orange-500">Étape {step} sur {totalSteps}</span>
                            <span className="text-sm font-medium text-orange-500">{Math.round(progressPercentage)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-orange-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
                        </div>
                    </div>

                    <form className="mt-8 space-y-6">
                        {step === 1 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Informations Personnelles</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Prénom" className="w-full p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                    <input type="text" placeholder="Nom de famille" className="w-full p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                </div>
                                <input type="email" placeholder="Adresse e-mail" className="w-full mt-4 p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                <input type="tel" placeholder="Numéro de téléphone" className="w-full mt-4 p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            </section>
                        )}

                        {step === 2 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Détails de l'entreprise</h2>
                                <input type="text" placeholder="Nom de l'entreprise" className="w-full p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                <input type="text" placeholder="Votre rôle / Titre" className="w-full mt-4 p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                <select className="w-full mt-4 p-3 glass-effect rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500">
                                    <option>Sélectionnez votre secteur</option>
                                    <option>Manufacturier</option>
                                    <option>Énergie</option>
                                    <option>Construction</option>
                                    <option>Technologie</option>
                                </select>
                            </section>
                        )}
                        
                        {step === 3 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Télécharger des documents</h2>
                                <p className="text-gray-600 mb-4">Veuillez télécharger tout document pertinent (ex: certifications, bons de commande).</p>
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-10 hover:border-orange-500 transition-colors">
                                    <UploadCloud className="w-12 h-12 text-gray-400" />
                                    <span className="mt-2 text-sm text-gray-600">{fileName || 'Cliquez pour télécharger ou glisser-déposer'}</span>
                                    <span className="text-xs text-gray-500">PDF, DOCX, PNG, JPG jusqu'à 10MB</span>
                                </label>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                            </section>
                        )}

                        <div className="flex justify-between mt-8">
                            <button type="button" onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                Retour
                            </button>
                            {step < totalSteps ? (
                                <button type="button" onClick={() => setStep(s => Math.min(totalSteps, s + 1))} className="px-6 py-2 bg-orange-500 text-white rounded-full font-semibold hover:bg-opacity-90 btn-pulse">
                                    Suivant
                                </button>
                            ) : (
                                <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-transform hover:scale-105">
                                    Soumettre l'inscription
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Registration;