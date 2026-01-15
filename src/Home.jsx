import Navbar from "./components/Navbar";
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import { useState, useEffect } from "react";
import StatsBar from "./components/StatsBar.jsx";
import Apropos from "./components/Apropos.jsx";
import Formation from "./components/Formation.jsx";
import logo from './assets/logo.png'
import Campus from "./components/Campus.jsx";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";


const lesLiens = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'A propos' },
    { id: 'formation', label: 'Formations' },
    { id: 'campus', label: 'Campus' },
    { id: 'contact', label: 'Contact' },
]

export default function Home() {

    const [activeSection, setActiveSection] = useState('accueil')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = lesLiens.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(lesLiens[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        // setMobileMenuOpen(false)
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
            <motion.nav initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm"
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className=" flex justify-between items-center">
                        {/* La partie du logo ************************************************************************** */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex gap-3 items-center"
                        >
                            <div className="w-12 h-12 rounded flex justify-center items-center">
                                <img src={logo} alt="Logo" className="relative" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-[#2D5A27] tracking-tight">IA2E</h1>
                                <p className="text-[10px] text-[#8B7355] font-medium tracking-wider uppercase">
                                    Le professionnel au service du progrès
                                </p>
                            </div>
                        </motion.div>
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
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-[#2D5A27]/10"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6 text-[#2D5A27]" /> : <Menu className="w-6 h-6 text-[#2D5A27]" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[#FDFBF7] border-t border-[#2D5A27]/10"
                        >
                            <div className="px-6 py-4 space-y-2">
                                {lesLiens.map((item) => (
                                    <button
                                        key={item.id}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === item.id
                                            ? 'bg-[#2D5A27] text-white'
                                            : 'text-[#2D5A27] hover:bg-[#2D5A27]/10'
                                            }`}
                                        onClick={() => { scrollToSection(item.id) }}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <Hero />
            <StatsBar />
            <Apropos />
            <Formation />
            <Campus />
            <Contact />
            <Footer />
        </div >
    )
}