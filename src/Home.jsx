import Navbar from "./components/Navbar";
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import { useState } from "react";
import StatsBar from "./components/StatsBar.jsx";
import Apropos from "./components/apropos.jsx";
import Formation from "./components/Formation.jsx";


const lesLiens = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'A propos' },
    { id: 'formation', label: 'Formations' },
    { id: 'contact', label: 'Contact' },
    { id: 'avantages', label: 'Nos atouts' }
]

export default function Home() {

    const [activeSection, setActiveSection] = useState('accueil')

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className=" flex justify-between items-center">
                        {/* La partie du logo ************************************************************************** */}
                        <div className="flex flex-row gap-3 items-center">
                            <div className="w-12 h-12 rounded flex justify-center items-center">
                                <img src="../public/logo.png" alt="Logo" className="relative" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-[#2D5A27] tracking-tight">IA2E</h1>
                                <p className="text-[10px] text-[#8B7355] font-medium tracking-wider uppercase">
                                    Le professionnel au service du progrès
                                </p>
                            </div>
                        </div>
                        {/* Navigation desktop */}
                        <div className="hidden md:flex items-center gap-1">
                            {lesLiens.map((lien, index) => (

                                <button className={` btn m-2 px-4 py-2 cursor-pointer rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === lien.id
                                    ? 'bg-[#2D5A27] text-white'
                                    : 'text-[#2D5A27] hover:bg-[#2D5A27]/10'
                                    }`} key={index}
                                    onClick={() => { scrollToSection(lien.id) }}
                                >
                                    {lien.label}
                                </button>

                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <Hero />
            <StatsBar />
            <Apropos />
            <Formation />
            <Contact />
            <Footer />
        </div >
    )
}