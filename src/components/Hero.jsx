import React from 'react';
import { Sprout, ArrowRight, GraduationCap, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import photoHero from "../assets/photoHero.jpg"
export default function Hero() {
    return (
        <section id="accueil" className='min-h-screen relative flex items-center pt-20'>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#4A7C43]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl" />
            </div>
            <div className='max-w-7xl mx-auto px-6 py-20 z-10 relative'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A27]/10 rounded-full mb-6">
                            <Sprout className="w-4 h-4 text-[#2D5A27]" />
                            <span className="text-sm font-medium text-[#2D5A27]">Cultivons l'avenir ensemble</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D5A27] leading-tight mb-6">
                            École d'Agriculture,
                            <span className="block text-[#4A7C43]">d'Élevage &</span>
                            <span className="block text-[#8B7355]">d'Environnement</span>
                        </h1>

                        <p className="text-lg text-[#5A5A5A] leading-relaxed mb-8 max-w-lg">
                            Formez-vous aux métiers de demain dans un cadre unique.
                            L'IA2E vous accompagne vers une carrière épanouissante au service de la nature.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <button className="bg-[#2D5A27] cursor-pointer inline-flex justify-center items-center gap-2 whitespace-nowrap h-9 hover:bg-[#1E3D1B] text-white px-8 py-6 rounded-full text-lg font-medium group">
                                Découvrir nos formations
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border-2 cursor-pointer border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27] h-9 inline-flex justify-center items-center gap-2 whitespace-nowrap hover:text-white px-8 py-6 rounded-full text-lg font-medium"
                            >
                                Nous contacter
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='relative aspect-square max-x-lg mx-auto '>
                            <div className="absolute inset-4 bg-linear-to-br from-[#2D5A27] to-[#4A7C43] rounded-[3rem] rotate-6" />
                            <img
                                src={photoHero}
                                alt="Campus IA2E"
                                className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#4A7C43]/20 rounded-full flex items-center justify-center">
                                    <GraduationCap className="w-7 h-7 text-[#2D5A27]" />
                                </div>
                                <div>
                                    <p className='text-2xl font-bold text-[#2D5A27]'>10+</p>
                                    <p className='text-sm  text-[#8B7355]'>Années d'excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                    // onClick={() => scrollToSection('apropos')}
                    >
                        <span className="text-sm text-[#8B7355]">Découvrir</span>
                        <ChevronDown className="w-6 h-6 text-[#2D5A27]" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}